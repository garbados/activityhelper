const { context } = require('../base')

module.exports = function (API) {
  class Children extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Children] })
}