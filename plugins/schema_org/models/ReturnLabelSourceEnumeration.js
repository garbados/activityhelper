const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnLabelSourceEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnLabelSourceEnumeration] })
}