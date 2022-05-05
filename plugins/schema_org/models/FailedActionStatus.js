const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FailedActionStatus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FailedActionStatus] })
}