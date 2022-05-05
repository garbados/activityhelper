const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MRI extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MRI] })
}