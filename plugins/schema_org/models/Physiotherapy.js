const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Physiotherapy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Physiotherapy] })
}