const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class VisualArtsEvent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [VisualArtsEvent] })
}