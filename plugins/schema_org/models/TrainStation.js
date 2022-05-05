const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TrainStation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TrainStation] })
}