const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DigitalFormat extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DigitalFormat] })
}