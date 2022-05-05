const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UsageOrScheduleHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UsageOrScheduleHealthAspect] })
}