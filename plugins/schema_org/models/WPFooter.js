const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WPFooter extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WPFooter] })
}