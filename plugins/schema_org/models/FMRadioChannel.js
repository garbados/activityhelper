const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class FMRadioChannel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [FMRadioChannel] })
}