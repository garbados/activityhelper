const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DateTime extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DateTime] })
}