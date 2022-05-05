const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AutoWash extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AutoWash] })
}