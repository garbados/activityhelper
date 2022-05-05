const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DownloadAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DownloadAction] })
}