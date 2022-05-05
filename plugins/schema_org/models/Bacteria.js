const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Bacteria extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Bacteria] })
}