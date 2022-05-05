const { context } = require('../base')

module.exports = function (API) {
  class ContainedInPlace extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContainedInPlace] })
}