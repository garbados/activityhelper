const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AdultEntertainment extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AdultEntertainment] })
}