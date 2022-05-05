const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Saturday extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Saturday] })
}