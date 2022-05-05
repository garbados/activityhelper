const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nonprofit501k extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nonprofit501k] })
}