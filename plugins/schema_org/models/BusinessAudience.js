const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BusinessAudience extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BusinessAudience] })
}