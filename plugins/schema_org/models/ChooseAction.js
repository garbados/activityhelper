const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ChooseAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ChooseAction] })
}