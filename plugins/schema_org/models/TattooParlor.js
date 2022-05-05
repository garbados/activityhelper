const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TattooParlor extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TattooParlor] })
}