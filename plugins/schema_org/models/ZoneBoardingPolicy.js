const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ZoneBoardingPolicy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ZoneBoardingPolicy] })
}