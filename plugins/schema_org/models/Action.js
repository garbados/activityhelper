const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Action extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Action] })
}