const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RiverBodyOfWater extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RiverBodyOfWater] })
}