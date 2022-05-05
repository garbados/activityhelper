const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Attorney extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Attorney] })
}