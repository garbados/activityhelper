const { context } = require('../base')

module.exports = function (API) {
  class Employee extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Employee] })
}