const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SuperficialAnatomy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SuperficialAnatomy] })
}