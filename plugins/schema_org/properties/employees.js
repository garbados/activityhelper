const { context } = require('../base')

module.exports = function (API) {
  class Employees extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Employees] })
}