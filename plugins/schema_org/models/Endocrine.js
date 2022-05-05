const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Endocrine extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Endocrine] })
}