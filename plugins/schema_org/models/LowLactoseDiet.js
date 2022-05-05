const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LowLactoseDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LowLactoseDiet] })
}