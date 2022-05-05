const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MSRP extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MSRP] })
}