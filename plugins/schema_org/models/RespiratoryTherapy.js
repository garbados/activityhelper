const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RespiratoryTherapy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RespiratoryTherapy] })
}