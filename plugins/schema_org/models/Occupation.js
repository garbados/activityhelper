const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Occupation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Occupation] })
}