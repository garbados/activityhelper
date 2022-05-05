const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RecyclingCenter extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RecyclingCenter] })
}