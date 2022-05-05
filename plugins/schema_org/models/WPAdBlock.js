const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WPAdBlock extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WPAdBlock] })
}