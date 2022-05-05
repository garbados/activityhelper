const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Article extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Article] })
}