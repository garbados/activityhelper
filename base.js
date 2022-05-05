const MODELS = {}
const PROPERTIES = {}
const CONTEXTS = {}

class BaseObject {
  static context = 'https://www.w3.org/ns/activitystreams'
  static properties = []
  static required = []

  static get type () {
    return this.name
  }

  static get propNames () {
    const propNames = this.properties
      .map(prop => prop.propName)
      .concat(this.getPropsFromContext(this.context))
    return propNames
  }

  static getPropsFromContext (context, opts = {}) {
    const { ignoreUnknownContexts } = opts
    const propNames = []
    if (Array.isArray(context)) {
      for (const subContext of context) {
        for (const propName of this.getPropsFromContext(subContext)) {
          propNames.push(propName)
        }
      }
    } else if (typeof context === 'string') {
      if (context !== BaseObject.context) {
        if (!(context in CONTEXTS) && !ignoreUnknownContexts) {
          throw new Error(`Unrecognized context: ${context}`)
        }
      }
      for (const propName of Object.keys(CONTEXTS[context].properties)) {
        propNames.push(propName)
      }
    } else if (typeof context === 'object') {
      for (const field of Object.keys(context)) {
        propNames.push(field)
      }
    }
    return propNames
  }

  static validate (object, opts = {}) {
    const {
      ignoreUnknownProps,
      allowUnknownTypes,
      ...contextOpts
    } = opts
    const contextPropNames = this.getPropsFromContext(object['@context'], contextOpts)
    const propNames = this.propNames.concat(contextPropNames)
    for (const [key, value] of Object.entries(object)) {
      if (key === '@context') {
        continue
      } else if (key === 'type') {
        if (!(value in MODELS) && !allowUnknownTypes) {
          throw new Error(`Unrecognized type: ${value}`)
        }
      } else if (!propNames.includes(key) && !ignoreUnknownProps) {
        throw new Error(`'${key}' not a known property of ${this.type}.`)
      } else {
        const i = propNames.indexOf(key)
        const Property = this.properties[i]
        if (Property && typeof Property.validate === 'function') {
          Property.validate(value)
        }
      }
    }
    for (const Property of this.required) {
      if (!(Property.propName in object)) {
        throw new Error(`${Property.propName} required as a property of ${this.type}, but was not found.`)
      }
    }
  }

  static publish (object) {
    return {
      '@context': this.context,
      ...object.json
    }
  }

  static fromObject (object) {
    object = JSON.parse(JSON.stringify(object))

    const recurse = (thing) => {
      for (const [key, value] of Object.entries(thing)) {
        if (value.type && value.type in MODELS) {
          thing[key] = this.fromObject(value)
        } else if (typeof value === 'object') {
          recurse(value)
        }
      }
    }

    if (object.type in MODELS) {
      let Model = MODELS[object.type]
      if (object['@context'] !== Model.context) {
        Model = class SubModel extends Model {
          static name = Model.name
          static type = Model.type
          static context = object['@context']
        }
      }

      recurse(object)

      const params = Model.required.map(prop => object[prop.propName])
      return new Model(...params, object)
    } else {
      throw new Error(`Unknown type: ${object.type}`)
    }
  }

  static fromLink (uri) {
    // TODO
  }

  constructor (opts = {}) {
    const propNames = this.constructor.propNames
    for (const [key, value] of Object.entries(opts)) {
      if (propNames.includes(key)) {
        this[key] = value
      }
    }
  }

  publish () {
    return this.constructor.publish(this)
  }

  get json () {
    const json = { type: this.constructor.type }

    for (const prop of this.constructor.propNames) {
      const value = this[prop]
      if (value !== undefined) {
        if (Array.isArray(value)) {
          json[prop] = value.map((value) => {
            return value.json || value
          })
        } else {
          json[prop] = value.json || value
        }
      }
    }

    return json
  }
}

class BaseProperty {
  // use `static propName = '...'` to set a custom property name.
  // otherwise the class name is lowercased, ex: Activity => activity
  static get propName () {
    return this.name[0].toLowerCase() + this.name.slice(1)
  }

  // throw a meaningful error if it isn't up to spec
  static validate (thing) {
    // noop
  }
}

const VALIDATORS = {
  or (validators = [], obj) {
    let ok = false
    for (const validate of validators) {
      try {
        validate(obj)
        ok = true
        break
      } catch (e) {
        continue
      }
    }
    if (!ok) {
      const validatorNames = validators.map(v => v.name).join(', ')
      throw new Error(`Object matched no validators: ${validatorNames}`)
    }
  },

  and (validators = [], obj) {
    for (const validator of validators) {
      validator.validate(obj)
    }
  }
}

const API = {
  VALIDATORS,
  BaseObject,
  BaseProperty,
  get contexts () {
    return CONTEXTS
  },
  get properties () {
    return PROPERTIES
  },
  get models () {
    return MODELS
  },
  validate (object) {
    const Model = MODELS[object.type]
    if (!Model) throw new Error(`Unknown type: ${object.type}`)
    Model.validate(object)
  },
  fromObject (object) {
    return MODELS.Object.fromObject(object)
  },
  fromLink (uri) {
    return MODELS.Object.fromLink(uri)
  },
  addModel (Model) {
    MODELS[Model.type] = Model
  },
  addProperty (Property) {
    PROPERTIES[Property.propName] = Property
  },
  addContext (name, { models, properties }) {
    if (!(name in CONTEXTS)) {
      CONTEXTS[name] = { models: {}, properties: {} }
    }
    if (models) {
      for (const Model of models) {
        API.addModel(Model)
        CONTEXTS[name].models[Model.type] = Model
      }
    }
    if (properties) {
      for (const Property of properties) {
        API.addProperty(Property)
        CONTEXTS[name].properties[Property.propName] = Property
      }
    }
  },
  plugin (plugin) {
    if (typeof plugin === 'function') {
      plugin(API)
    } else {
      const { models, properties } = plugin
      if (models) models.forEach(API.addModel)
      if (properties) properties.forEach(API.addProperty)
    }
  }
}

module.exports = {
  MODELS,
  PROPERTIES,
  CONTEXTS,
  VALIDATORS,
  API,
  BaseObject,
  BaseProperty
}
