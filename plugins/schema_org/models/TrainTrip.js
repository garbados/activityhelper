const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TrainTrip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TrainTrip] })
}