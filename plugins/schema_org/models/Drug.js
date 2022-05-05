const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Drug extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Drug] })
}