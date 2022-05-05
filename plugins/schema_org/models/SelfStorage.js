const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SelfStorage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SelfStorage] })
}