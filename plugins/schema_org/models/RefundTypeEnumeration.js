const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RefundTypeEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RefundTypeEnumeration] })
}