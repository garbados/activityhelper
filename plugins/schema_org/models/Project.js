const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Project extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Project] })
}