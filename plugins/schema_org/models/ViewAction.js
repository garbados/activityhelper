const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ViewAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ViewAction] })
}