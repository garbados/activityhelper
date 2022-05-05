const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Integer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Integer] })
}