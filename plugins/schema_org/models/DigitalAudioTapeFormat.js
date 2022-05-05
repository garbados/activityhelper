const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DigitalAudioTapeFormat extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DigitalAudioTapeFormat] })
}