const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PlanAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PlanAction] })
}