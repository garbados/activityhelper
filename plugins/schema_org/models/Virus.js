const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Virus extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Virus] })
}