const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nonprofit501c17 extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nonprofit501c17] })
}