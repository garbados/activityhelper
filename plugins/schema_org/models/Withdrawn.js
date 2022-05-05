const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Withdrawn extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Withdrawn] })
}