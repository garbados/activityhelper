const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OrderInTransit extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OrderInTransit] })
}