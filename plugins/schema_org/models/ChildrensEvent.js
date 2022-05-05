const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ChildrensEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ChildrensEvent] })
}