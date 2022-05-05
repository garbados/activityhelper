const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusOrCoach extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusOrCoach] })
}