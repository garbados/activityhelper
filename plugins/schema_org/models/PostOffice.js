const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PostOffice extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PostOffice] })
}