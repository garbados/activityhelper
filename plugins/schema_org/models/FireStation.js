const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FireStation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FireStation] })
}