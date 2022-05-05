const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DatedMoneySpecification extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DatedMoneySpecification] })
}