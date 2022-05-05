const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Review extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Review] })
}