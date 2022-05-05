const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Gynecologic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Gynecologic] })
}