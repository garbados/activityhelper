const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Installment extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Installment] })
}