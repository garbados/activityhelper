const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Hardcover extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Hardcover] })
}