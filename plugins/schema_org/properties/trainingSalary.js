const { context } = require('../base')

module.exports = function (API) {
  class TrainingSalary extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TrainingSalary] })
}