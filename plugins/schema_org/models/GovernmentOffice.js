const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GovernmentOffice extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GovernmentOffice] })
}