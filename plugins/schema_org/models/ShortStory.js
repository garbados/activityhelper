const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ShortStory extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ShortStory] })
}