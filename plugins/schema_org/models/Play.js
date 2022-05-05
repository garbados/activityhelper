const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Play extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Play] })
}