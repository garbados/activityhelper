const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TheaterEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TheaterEvent] })
}