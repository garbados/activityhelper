const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ExhibitionEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ExhibitionEvent] })
}