const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Oncologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Oncologic] })
}