const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MayTreatHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MayTreatHealthAspect] })
}