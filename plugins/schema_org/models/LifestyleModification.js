const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LifestyleModification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LifestyleModification] })
}