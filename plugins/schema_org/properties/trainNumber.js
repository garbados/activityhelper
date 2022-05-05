const { context } = require('../base')

module.exports = function (API) {
  class TrainNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TrainNumber] })
}