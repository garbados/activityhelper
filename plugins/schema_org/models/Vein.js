const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Vein extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Vein] })
}