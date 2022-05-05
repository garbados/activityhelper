const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Male extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Male] })
}