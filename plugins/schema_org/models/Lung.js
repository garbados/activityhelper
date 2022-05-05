const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Lung extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Lung] })
}