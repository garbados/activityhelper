const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ViolenceConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ViolenceConsideration] })
}