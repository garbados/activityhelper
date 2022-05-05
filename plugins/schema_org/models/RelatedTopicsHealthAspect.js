const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RelatedTopicsHealthAspect extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RelatedTopicsHealthAspect] })
}