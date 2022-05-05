const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PaintAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PaintAction] })
}