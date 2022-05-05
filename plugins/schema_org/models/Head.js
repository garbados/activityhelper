const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Head extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Head] })
}