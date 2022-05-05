const { context } = require('../base')

module.exports = function (API) {
  class MusicBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MusicBy] })
}