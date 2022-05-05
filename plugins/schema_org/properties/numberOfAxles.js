const { context } = require('../base')

module.exports = function (API) {
  class NumberOfAxles extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfAxles] })
}