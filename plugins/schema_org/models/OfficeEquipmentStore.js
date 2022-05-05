const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OfficeEquipmentStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OfficeEquipmentStore] })
}