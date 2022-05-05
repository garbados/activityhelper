const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nonprofit501c21 extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nonprofit501c21] })
}