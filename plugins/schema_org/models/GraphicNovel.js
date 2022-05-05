const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GraphicNovel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GraphicNovel] })
}