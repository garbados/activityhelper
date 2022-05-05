const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ControlAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ControlAction] })
}