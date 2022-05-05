const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AutoRepair extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AutoRepair] })
}