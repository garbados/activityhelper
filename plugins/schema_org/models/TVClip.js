const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TVClip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TVClip] })
}