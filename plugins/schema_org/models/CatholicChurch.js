const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CatholicChurch extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CatholicChurch] })
}