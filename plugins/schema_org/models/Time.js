const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Time extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Time] })
}