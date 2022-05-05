const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MarryAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MarryAction] })
}