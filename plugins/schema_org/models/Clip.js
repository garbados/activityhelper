const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Clip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Clip] })
}