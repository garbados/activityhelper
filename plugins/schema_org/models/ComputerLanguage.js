const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ComputerLanguage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ComputerLanguage] })
}