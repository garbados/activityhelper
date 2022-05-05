const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WeaponConsideration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WeaponConsideration] })
}