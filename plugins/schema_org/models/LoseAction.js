const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LoseAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LoseAction] })
}