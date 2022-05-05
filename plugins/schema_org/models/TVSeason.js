const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TVSeason extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TVSeason] })
}