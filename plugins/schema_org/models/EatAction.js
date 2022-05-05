const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EatAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EatAction] })
}