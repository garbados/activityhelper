const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LowFatDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LowFatDiet] })
}