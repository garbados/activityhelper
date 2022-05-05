const { context } = require('../base')

module.exports = function (API) {
  class TongueWeight extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TongueWeight] })
}