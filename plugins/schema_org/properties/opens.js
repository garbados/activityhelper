const { context } = require('../base')

module.exports = function (API) {
  class Opens extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Opens] })
}