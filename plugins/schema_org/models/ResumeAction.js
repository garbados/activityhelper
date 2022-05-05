const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ResumeAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ResumeAction] })
}