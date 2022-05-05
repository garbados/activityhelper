const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Subscription extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Subscription] })
}