const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Course extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Course] })
}