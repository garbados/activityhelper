const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Registry extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Registry] })
}