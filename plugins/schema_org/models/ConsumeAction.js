const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ConsumeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ConsumeAction] })
}