const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnByMail extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnByMail] })
}