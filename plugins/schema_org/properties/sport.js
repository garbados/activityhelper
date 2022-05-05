const { context } = require('../base')

module.exports = function (API) {
  class Sport extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Sport] })
}