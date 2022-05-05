const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Question extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Question] })
}