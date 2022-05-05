const { context } = require('../base')

module.exports = function (API) {
  class PartOfEpisode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PartOfEpisode] })
}