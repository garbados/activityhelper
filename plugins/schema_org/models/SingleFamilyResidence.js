const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SingleFamilyResidence extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SingleFamilyResidence] })
}