const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class StupidType extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [StupidType] })
}