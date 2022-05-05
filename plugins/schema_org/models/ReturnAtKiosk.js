const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnAtKiosk extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnAtKiosk] })
}