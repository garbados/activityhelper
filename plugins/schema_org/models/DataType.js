const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DataType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DataType] })
}