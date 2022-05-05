const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReactAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReactAction] })
}