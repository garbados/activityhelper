const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Anesthesia extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Anesthesia] })
}