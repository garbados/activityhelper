const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ElectronicsStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ElectronicsStore] })
}