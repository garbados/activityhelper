const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowItWorksHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowItWorksHealthAspect] })
}