const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LiteraryEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LiteraryEvent] })
}