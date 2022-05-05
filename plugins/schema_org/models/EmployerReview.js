const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EmployerReview extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EmployerReview] })
}