const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DanceGroup extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DanceGroup] })
}