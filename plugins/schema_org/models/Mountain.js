const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Mountain extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Mountain] })
}