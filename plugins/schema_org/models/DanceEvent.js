const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DanceEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DanceEvent] })
}