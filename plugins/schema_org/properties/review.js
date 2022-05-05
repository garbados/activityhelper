const { context } = require('../base')

module.exports = function (API) {
  class Review extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Review] })
}