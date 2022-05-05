const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BodyOfWater extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BodyOfWater] })
}