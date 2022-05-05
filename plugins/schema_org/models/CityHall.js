const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CityHall extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CityHall] })
}