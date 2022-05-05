const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TransferAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TransferAction] })
}