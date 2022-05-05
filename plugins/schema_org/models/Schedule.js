const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Schedule extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Schedule] })
}