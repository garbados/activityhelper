const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CourseInstance extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CourseInstance] })
}