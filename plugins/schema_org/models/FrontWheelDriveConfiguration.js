const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FrontWheelDriveConfiguration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FrontWheelDriveConfiguration] })
}