const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GroupBoardingPolicy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GroupBoardingPolicy] })
}