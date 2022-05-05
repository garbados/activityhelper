const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PhysicalTherapy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PhysicalTherapy] })
}