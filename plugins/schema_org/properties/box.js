const { context } = require('../base')

module.exports = function (API) {
  class Box extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Box] })
}