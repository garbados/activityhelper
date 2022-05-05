const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LeaveAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LeaveAction] })
}