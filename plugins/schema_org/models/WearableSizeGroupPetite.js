const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupPetite extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupPetite] })
}