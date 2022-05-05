const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PhysicalActivityCategory extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PhysicalActivityCategory] })
}