const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Physician extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Physician] })
}