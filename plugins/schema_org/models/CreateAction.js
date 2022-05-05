const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CreateAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CreateAction] })
}