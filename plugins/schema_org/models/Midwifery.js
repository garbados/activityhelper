const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Midwifery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Midwifery] })
}