const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OnDemandEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OnDemandEvent] })
}