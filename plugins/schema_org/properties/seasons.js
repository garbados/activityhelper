const { context } = require('../base')

module.exports = function (API) {
  class Seasons extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Seasons] })
}