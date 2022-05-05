const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StrengthTraining extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StrengthTraining] })
}