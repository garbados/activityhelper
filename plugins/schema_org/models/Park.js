const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Park extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Park] })
}