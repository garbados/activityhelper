const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RadioStation extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RadioStation] })
}