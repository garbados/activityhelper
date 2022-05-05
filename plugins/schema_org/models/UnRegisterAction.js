const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UnRegisterAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UnRegisterAction] })
}