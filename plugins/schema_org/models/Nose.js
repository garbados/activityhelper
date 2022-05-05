const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Nose extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Nose] })
}