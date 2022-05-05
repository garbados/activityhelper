const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Corporation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Corporation] })
}