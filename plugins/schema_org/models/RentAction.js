const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RentAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RentAction] })
}