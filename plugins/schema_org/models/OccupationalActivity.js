const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OccupationalActivity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OccupationalActivity] })
}