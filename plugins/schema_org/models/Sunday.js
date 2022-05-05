const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Sunday extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Sunday] })
}