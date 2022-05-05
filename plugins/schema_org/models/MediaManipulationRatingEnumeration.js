const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MediaManipulationRatingEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MediaManipulationRatingEnumeration] })
}