const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Friday extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Friday] })
}