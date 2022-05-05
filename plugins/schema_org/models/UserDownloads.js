const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class UserDownloads extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [UserDownloads] })
}