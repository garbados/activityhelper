const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Room extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Room] })
}