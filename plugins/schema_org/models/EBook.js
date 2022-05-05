const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class EBook extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [EBook] })
}