const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Monday extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Monday] })
}