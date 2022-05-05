const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TraditionalChinese extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TraditionalChinese] })
}