const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Geriatric extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Geriatric] })
}