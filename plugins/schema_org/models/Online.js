const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Online extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Online] })
}