const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AdultOrientedEnumeration extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AdultOrientedEnumeration] })
}