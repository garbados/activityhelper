const { context } = require('../base')

module.exports = function (API) {
  class Audio extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Audio] })
}