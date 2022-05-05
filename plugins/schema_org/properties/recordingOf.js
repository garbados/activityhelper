const { context } = require('../base')

module.exports = function (API) {
  class RecordingOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecordingOf] })
}