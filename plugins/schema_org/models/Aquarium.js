const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Aquarium extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Aquarium] })
}