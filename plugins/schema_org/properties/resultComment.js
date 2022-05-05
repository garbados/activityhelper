const { context } = require('../base')

module.exports = function (API) {
  class ResultComment extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ResultComment] })
}