const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CT extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CT] })
}