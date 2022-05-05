const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Tuesday extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Tuesday] })
}