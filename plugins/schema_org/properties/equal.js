const { context } = require('../base')

module.exports = function (API) {
  class Equal extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Equal] })
}