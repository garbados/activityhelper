const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DrivingSchoolVehicleUsage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DrivingSchoolVehicleUsage] })
}