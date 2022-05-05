const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AutomatedTeller extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AutomatedTeller] })
}