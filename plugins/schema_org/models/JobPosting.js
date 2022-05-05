const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class JobPosting extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [JobPosting] })
}