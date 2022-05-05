const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Neurologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Neurologic] })
}