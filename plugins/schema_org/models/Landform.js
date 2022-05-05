const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Landform extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Landform] })
}