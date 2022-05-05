const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Place extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Place] })
}