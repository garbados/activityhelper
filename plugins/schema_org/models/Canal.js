const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Canal extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Canal] })
}