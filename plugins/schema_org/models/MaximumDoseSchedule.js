const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MaximumDoseSchedule extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MaximumDoseSchedule] })
}