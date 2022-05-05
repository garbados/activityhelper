const { context } = require('../base')

module.exports = function (API) {
  class YearsInOperation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [YearsInOperation] })
}