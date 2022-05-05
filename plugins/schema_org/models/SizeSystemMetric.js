const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SizeSystemMetric extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SizeSystemMetric] })
}