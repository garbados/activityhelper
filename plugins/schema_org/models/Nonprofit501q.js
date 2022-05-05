const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nonprofit501q extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nonprofit501q] })
}