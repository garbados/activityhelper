const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CardiovascularExam extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CardiovascularExam] })
}