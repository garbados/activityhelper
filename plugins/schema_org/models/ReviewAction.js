const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReviewAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReviewAction] })
}