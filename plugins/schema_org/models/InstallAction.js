const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InstallAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InstallAction] })
}