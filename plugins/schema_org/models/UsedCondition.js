const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UsedCondition extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UsedCondition] })
}