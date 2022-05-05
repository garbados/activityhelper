const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Answer extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Answer] })
}