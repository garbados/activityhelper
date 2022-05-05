const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HotelRoom extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HotelRoom] })
}