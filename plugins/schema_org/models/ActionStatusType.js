const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ActionStatusType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ActionStatusType] })
}