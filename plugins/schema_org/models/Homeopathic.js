const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Homeopathic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Homeopathic] })
}