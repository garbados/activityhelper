const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Protozoa extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Protozoa] })
}