const { context } = require('../base')

module.exports = function (API) {
  class Member extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Member] })
}