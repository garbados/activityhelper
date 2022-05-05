const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HinduDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HinduDiet] })
}