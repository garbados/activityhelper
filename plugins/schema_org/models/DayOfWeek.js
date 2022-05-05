const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DayOfWeek extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DayOfWeek] })
}