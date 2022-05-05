const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Female extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Female] })
}