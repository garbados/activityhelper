const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FloorPlan extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FloorPlan] })
}