const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AMRadioChannel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AMRadioChannel] })
}