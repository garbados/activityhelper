const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EmailMessage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EmailMessage] })
}