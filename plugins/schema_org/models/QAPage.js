const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class QAPage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [QAPage] })
}