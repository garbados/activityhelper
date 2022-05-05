const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OceanBodyOfWater extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OceanBodyOfWater] })
}