const { context } = require('../base')

module.exports = function (API) {
  class Instructor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Instructor] })
}