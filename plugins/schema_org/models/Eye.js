const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Eye extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Eye] })
}