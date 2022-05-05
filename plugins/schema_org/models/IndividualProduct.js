const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class IndividualProduct extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [IndividualProduct] })
}