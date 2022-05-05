const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Flight extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Flight] })
}