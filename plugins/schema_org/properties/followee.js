const { context } = require('../base')

module.exports = function (API) {
  class Followee extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Followee] })
}