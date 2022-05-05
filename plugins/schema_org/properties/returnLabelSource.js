const { context } = require('../base')

module.exports = function (API) {
  class ReturnLabelSource extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReturnLabelSource] })
}