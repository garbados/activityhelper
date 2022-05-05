const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Ear extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Ear] })
}