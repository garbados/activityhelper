const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ContactPointOption extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ContactPointOption] })
}