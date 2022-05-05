const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnMethodEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnMethodEnumeration] })
}