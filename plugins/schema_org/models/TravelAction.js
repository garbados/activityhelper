const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TravelAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TravelAction] })
}