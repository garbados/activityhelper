const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CompleteDataFeed extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CompleteDataFeed] })
}