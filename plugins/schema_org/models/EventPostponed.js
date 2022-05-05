const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EventPostponed extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EventPostponed] })
}