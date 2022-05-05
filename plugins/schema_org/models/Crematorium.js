const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Crematorium extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Crematorium] })
}