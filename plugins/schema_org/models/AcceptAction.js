const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AcceptAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AcceptAction] })
}