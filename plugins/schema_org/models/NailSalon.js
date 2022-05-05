const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NailSalon extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NailSalon] })
}