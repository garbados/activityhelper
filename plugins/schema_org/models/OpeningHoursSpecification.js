const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OpeningHoursSpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OpeningHoursSpecification] })
}