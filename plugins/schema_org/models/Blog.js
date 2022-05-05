const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Blog extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Blog] })
}