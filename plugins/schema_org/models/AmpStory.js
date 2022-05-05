const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AmpStory extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AmpStory] })
}