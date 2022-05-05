const { context } = require('../base')

module.exports = function (API) {
  class ObservedNode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ObservedNode] })
}