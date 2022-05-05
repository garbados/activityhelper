const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DVDFormat extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DVDFormat] })
}