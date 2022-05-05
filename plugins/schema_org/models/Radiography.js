const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Radiography extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Radiography] })
}