const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SeekToAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SeekToAction] })
}