const { context } = require('../base')

module.exports = function (API) {
  class MultipleValues extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MultipleValues] })
}