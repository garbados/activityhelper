const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Abdomen extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Abdomen] })
}