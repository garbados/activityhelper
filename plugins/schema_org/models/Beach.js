const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Beach extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Beach] })
}