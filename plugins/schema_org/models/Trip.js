const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Trip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Trip] })
}