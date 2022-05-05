const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WPSideBar extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WPSideBar] })
}