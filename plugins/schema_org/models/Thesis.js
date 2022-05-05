const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Thesis extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Thesis] })
}