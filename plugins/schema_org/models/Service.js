const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Service extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Service] })
}