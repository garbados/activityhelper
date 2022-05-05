const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Neuro extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Neuro] })
}