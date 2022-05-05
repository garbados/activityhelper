const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ArriveAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ArriveAction] })
}