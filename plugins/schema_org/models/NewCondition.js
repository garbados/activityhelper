const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NewCondition extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NewCondition] })
}