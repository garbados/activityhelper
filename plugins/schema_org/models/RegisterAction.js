const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RegisterAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RegisterAction] })
}