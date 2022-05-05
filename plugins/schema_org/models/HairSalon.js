const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HairSalon extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HairSalon] })
}