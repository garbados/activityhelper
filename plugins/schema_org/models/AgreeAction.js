const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AgreeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AgreeAction] })
}