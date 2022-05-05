const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AuthoritativeLegalValue extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AuthoritativeLegalValue] })
}