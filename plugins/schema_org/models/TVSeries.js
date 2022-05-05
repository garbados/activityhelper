const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TVSeries extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TVSeries] })
}