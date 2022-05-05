const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TypeAndQuantityNode extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TypeAndQuantityNode] })
}