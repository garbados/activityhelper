const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Artery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Artery] })
}