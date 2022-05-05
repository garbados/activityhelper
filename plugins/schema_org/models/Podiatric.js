const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Podiatric extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Podiatric] })
}