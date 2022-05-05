const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CreativeWork extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CreativeWork] })
}