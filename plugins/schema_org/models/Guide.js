const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Guide extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Guide] })
}