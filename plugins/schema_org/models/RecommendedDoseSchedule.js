const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RecommendedDoseSchedule extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RecommendedDoseSchedule] })
}