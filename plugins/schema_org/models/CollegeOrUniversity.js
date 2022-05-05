const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CollegeOrUniversity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CollegeOrUniversity] })
}