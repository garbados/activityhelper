const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Balance extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Balance] })
}