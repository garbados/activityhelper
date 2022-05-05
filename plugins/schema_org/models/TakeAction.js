const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TakeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TakeAction] })
}