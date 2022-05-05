const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Grant extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Grant] })
}