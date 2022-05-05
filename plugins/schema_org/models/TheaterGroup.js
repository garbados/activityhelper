const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TheaterGroup extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TheaterGroup] })
}