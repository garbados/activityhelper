const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RadiationTherapy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RadiationTherapy] })
}