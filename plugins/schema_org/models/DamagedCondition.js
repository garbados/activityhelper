const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DamagedCondition extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DamagedCondition] })
}