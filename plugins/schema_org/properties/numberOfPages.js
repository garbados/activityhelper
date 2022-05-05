const { context } = require('../base')

module.exports = function (API) {
  class NumberOfPages extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfPages] })
}