const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ElementarySchool extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ElementarySchool] })
}