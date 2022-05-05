const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class GlutenFreeDiet extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [GlutenFreeDiet] })
}