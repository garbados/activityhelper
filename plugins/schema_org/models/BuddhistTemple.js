const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BuddhistTemple extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BuddhistTemple] })
}