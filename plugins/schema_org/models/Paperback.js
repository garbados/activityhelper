const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Paperback extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Paperback] })
}