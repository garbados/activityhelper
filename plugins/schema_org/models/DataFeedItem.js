const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DataFeedItem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DataFeedItem] })
}