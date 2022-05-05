const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class QualitativeValue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [QualitativeValue] })
}