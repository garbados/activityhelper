const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnFeesEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnFeesEnumeration] })
}