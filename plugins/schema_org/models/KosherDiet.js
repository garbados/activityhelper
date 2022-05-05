const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class KosherDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [KosherDiet] })
}