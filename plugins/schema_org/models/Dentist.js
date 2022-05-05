const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Dentist extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Dentist] })
}