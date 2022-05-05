const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class XPathType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [XPathType] })
}