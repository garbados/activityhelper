const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CorrectionComment extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CorrectionComment] })
}