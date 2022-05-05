const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ComputerStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ComputerStore] })
}