const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PhysicalExam extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PhysicalExam] })
}