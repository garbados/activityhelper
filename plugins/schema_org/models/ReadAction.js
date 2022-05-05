const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReadAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReadAction] })
}