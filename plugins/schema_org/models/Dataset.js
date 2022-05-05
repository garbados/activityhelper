const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Dataset extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Dataset] })
}