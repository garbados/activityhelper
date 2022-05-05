const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Newspaper extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Newspaper] })
}