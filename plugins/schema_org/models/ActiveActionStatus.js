const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ActiveActionStatus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ActiveActionStatus] })
}