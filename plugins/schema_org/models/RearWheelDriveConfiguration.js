const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RearWheelDriveConfiguration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RearWheelDriveConfiguration] })
}