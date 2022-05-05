const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Bridge extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Bridge] })
}