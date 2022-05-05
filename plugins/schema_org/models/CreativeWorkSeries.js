const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CreativeWorkSeries extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CreativeWorkSeries] })
}