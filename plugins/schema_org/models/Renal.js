const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Renal extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Renal] })
}