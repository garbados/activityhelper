const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Thursday extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Thursday] })
}