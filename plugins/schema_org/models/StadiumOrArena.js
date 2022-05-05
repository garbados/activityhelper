const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StadiumOrArena extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StadiumOrArena] })
}