const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaidLeave extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaidLeave] })
}