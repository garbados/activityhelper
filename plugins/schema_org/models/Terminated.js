const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Terminated extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Terminated] })
}