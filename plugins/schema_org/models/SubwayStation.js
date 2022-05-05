const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SubwayStation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SubwayStation] })
}