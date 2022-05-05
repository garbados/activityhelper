const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PublicHolidays extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PublicHolidays] })
}