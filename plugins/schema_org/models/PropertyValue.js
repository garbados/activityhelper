const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PropertyValue extends SchemaOrgObject {
    static properties = API.models.Thing.properties.concat([
      API.properties.maxValue,
      API.properties.minValue,
      API.properties.measurementTechnique,
      API.properties.propertyID,
      API.properties.unitCode,
      API.properties.unitText,
      API.properties.value,
      API.properties.valueReference
    ])
  }

  API.addContext(SchemaOrgObject.context, { models: [PropertyValue] })
}
