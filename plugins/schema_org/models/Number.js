const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Number extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Number] })
}