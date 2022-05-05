const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SheetMusic extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SheetMusic] })
}