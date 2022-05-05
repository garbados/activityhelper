const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ScheduleAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ScheduleAction] })
}