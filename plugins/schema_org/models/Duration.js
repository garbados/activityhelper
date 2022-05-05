const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Duration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Duration] })
}