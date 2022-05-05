const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ConvenienceStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ConvenienceStore] })
}