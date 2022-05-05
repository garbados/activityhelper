const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Text extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Text] })
}