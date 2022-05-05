const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MisconceptionsHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MisconceptionsHealthAspect] })
}