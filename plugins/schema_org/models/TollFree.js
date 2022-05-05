const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TollFree extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TollFree] })
}