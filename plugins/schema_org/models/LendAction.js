const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LendAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LendAction] })
}