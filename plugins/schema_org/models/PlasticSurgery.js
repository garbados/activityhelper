const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PlasticSurgery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PlasticSurgery] })
}