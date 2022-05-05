const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowToTool extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowToTool] })
}