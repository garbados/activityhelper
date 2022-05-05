const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Cardiovascular extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Cardiovascular] })
}