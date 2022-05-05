const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Skin extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Skin] })
}