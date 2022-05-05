const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SteeringPositionValue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SteeringPositionValue] })
}