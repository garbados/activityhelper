const { context } = require('../base')

module.exports = function (API) {
  class SizeGroup extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SizeGroup] })
}