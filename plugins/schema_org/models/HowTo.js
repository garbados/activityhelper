const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowTo extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowTo] })
}