const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LymphaticVessel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LymphaticVessel] })
}