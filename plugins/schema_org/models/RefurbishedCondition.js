const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RefurbishedCondition extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RefurbishedCondition] })
}