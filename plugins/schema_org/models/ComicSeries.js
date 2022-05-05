const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ComicSeries extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ComicSeries] })
}