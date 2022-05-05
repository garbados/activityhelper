const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HearingImpairedSupported extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HearingImpairedSupported] })
}