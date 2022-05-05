const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Accommodation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Accommodation] })
}