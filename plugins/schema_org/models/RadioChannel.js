const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RadioChannel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RadioChannel] })
}