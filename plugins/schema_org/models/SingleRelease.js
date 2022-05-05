const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SingleRelease extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SingleRelease] })
}