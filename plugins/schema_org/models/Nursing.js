const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nursing extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nursing] })
}