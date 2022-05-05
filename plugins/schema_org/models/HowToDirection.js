const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowToDirection extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowToDirection] })
}