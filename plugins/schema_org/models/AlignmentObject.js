const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AlignmentObject extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AlignmentObject] })
}