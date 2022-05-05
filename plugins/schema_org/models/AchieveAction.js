const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AchieveAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AchieveAction] })
}