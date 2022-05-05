const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GenderType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GenderType] })
}