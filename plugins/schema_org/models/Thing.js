const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Thing extends SchemaOrgObject {
    static properties = [
      API.properties.additionalType,
      API.properties.alternateName,
      API.properties.description,
      API.properties.disambiguatingDescription,
      API.properties.image,
      API.properties.mainEntityOfPage,
      API.properties.name,
      API.properties.potentialAction,
      API.properties.sameAs,
      API.properties.subjectOf,
      API.properties.url
    ]
  }

  API.addContext(SchemaOrgObject.context, { models: [Thing] })
}
