const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DriveWheelConfigurationValue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DriveWheelConfigurationValue] })
}