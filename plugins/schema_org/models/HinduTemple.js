const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HinduTemple extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HinduTemple] })
}