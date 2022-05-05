const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Distillery extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Distillery] })
}