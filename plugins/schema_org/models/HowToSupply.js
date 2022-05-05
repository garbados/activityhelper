const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowToSupply extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowToSupply] })
}