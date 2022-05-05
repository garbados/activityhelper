const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Quiz extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Quiz] })
}