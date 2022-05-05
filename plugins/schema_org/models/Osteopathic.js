const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Osteopathic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Osteopathic] })
}