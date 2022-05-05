const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WearableSizeGroupWomens extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WearableSizeGroupWomens] })
}