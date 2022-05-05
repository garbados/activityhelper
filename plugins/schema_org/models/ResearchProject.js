const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ResearchProject extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ResearchProject] })
}