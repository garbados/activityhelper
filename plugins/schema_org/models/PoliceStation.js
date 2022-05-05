const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PoliceStation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PoliceStation] })
}