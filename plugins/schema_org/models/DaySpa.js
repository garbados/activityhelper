const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DaySpa extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DaySpa] })
}