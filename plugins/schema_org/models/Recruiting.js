const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Recruiting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Recruiting] })
}