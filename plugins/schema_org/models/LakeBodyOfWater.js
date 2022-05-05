const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LakeBodyOfWater extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LakeBodyOfWater] })
}