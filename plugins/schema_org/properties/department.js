const { context } = require('../base')

module.exports = function (API) {
  class Department extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Department] })
}