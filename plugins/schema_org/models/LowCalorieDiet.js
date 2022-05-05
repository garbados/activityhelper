const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LowCalorieDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LowCalorieDiet] })
}