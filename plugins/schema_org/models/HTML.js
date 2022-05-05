const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HTML extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HTML] })
}