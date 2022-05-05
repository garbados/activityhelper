const { context } = require('../base')

module.exports = function (API) {
  class CustomerRemorseReturnLabelSource extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CustomerRemorseReturnLabelSource] })
}