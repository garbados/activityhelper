const { context } = require('../base')

module.exports = function (API) {
  class Director extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Director] })
}