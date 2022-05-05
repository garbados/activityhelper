const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Muscle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Muscle] })
}