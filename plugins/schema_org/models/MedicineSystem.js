const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicineSystem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicineSystem] })
}