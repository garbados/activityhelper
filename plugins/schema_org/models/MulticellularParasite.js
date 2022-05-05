const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MulticellularParasite extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MulticellularParasite] })
}