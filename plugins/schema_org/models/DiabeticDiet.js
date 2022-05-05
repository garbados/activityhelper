const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DiabeticDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DiabeticDiet] })
}