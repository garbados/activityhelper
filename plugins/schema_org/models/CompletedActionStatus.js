const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CompletedActionStatus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CompletedActionStatus] })
}