const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FullRefund extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FullRefund] })
}