const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Church extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Church] })
}