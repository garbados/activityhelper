const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Organization extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Organization] })
}