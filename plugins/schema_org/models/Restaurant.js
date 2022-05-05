const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Restaurant extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Restaurant] })
}