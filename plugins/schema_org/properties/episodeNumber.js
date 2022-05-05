const { context } = require('../base')

module.exports = function (API) {
  class EpisodeNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EpisodeNumber] })
}