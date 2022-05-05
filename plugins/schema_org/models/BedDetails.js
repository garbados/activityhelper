const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BedDetails extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BedDetails] })
}