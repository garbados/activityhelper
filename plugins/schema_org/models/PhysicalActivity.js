const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PhysicalActivity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PhysicalActivity] })
}