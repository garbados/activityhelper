const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LeisureTimeActivity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LeisureTimeActivity] })
}