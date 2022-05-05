const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class InternetCafe extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [InternetCafe] })
}