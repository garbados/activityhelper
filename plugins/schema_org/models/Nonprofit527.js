const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nonprofit527 extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nonprofit527] })
}