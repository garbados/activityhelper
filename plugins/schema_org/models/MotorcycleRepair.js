const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MotorcycleRepair extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MotorcycleRepair] })
}