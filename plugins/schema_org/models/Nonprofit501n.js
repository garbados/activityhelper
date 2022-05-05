const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nonprofit501n extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nonprofit501n] })
}