const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VoteAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VoteAction] })
}