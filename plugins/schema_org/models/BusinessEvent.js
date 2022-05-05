const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusinessEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusinessEvent] })
}