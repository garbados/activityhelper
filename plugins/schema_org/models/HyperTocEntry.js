const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HyperTocEntry extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HyperTocEntry] })
}