const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EditedOrCroppedContent extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EditedOrCroppedContent] })
}