const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CreativeWorkSeason extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CreativeWorkSeason] })
}