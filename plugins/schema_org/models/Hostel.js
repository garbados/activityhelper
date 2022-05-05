const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Hostel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Hostel] })
}