const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WebApplication extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WebApplication] })
}