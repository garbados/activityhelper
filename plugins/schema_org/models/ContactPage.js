const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ContactPage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ContactPage] })
}