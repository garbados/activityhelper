const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ResultsNotAvailable extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ResultsNotAvailable] })
}