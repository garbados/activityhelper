const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CssSelectorType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CssSelectorType] })
}