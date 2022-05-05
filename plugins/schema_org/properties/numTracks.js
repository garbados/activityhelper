const { context } = require('../base')

module.exports = function (API) {
  class NumTracks extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumTracks] })
}