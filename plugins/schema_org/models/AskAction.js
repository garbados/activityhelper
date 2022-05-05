const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AskAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AskAction] })
}