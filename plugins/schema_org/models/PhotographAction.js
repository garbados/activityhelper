const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PhotographAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PhotographAction] })
}