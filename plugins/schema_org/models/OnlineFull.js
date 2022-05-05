const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OnlineFull extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OnlineFull] })
}