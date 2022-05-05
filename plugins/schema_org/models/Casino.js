const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Casino extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Casino] })
}