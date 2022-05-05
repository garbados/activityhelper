const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HalalDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HalalDiet] })
}