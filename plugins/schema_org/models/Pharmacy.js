const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Pharmacy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Pharmacy] })
}