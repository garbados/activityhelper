const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MoveAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MoveAction] })
}