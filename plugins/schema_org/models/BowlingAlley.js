const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BowlingAlley extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BowlingAlley] })
}