const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ContagiousnessHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ContagiousnessHealthAspect] })
}