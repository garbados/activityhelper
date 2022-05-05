const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Invoice extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Invoice] })
}