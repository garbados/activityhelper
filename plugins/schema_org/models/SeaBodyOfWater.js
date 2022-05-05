const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SeaBodyOfWater extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SeaBodyOfWater] })
}