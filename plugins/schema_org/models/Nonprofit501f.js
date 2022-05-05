const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nonprofit501f extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nonprofit501f] })
}