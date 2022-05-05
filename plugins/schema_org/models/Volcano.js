const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Volcano extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Volcano] })
}