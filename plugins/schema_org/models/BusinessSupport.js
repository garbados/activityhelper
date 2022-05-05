const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusinessSupport extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusinessSupport] })
}