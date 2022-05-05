const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Resort extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Resort] })
}