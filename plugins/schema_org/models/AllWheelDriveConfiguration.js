const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AllWheelDriveConfiguration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AllWheelDriveConfiguration] })
}