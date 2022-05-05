const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HyperToc extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HyperToc] })
}