const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Reservation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Reservation] })
}