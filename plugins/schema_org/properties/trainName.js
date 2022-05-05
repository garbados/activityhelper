const { context } = require('../base')

module.exports = function (API) {
  class TrainName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TrainName] })
}