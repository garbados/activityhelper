const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Neck extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Neck] })
}