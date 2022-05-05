const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DrinkAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DrinkAction] })
}