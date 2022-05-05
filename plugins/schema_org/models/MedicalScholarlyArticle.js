const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MedicalScholarlyArticle extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MedicalScholarlyArticle] })
}