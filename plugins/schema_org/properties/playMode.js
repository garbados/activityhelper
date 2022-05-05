const { context } = require('../base')

module.exports = function (API) {
  class PlayMode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PlayMode] })
}