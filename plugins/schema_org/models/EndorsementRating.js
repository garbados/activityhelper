const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EndorsementRating extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EndorsementRating] })
}