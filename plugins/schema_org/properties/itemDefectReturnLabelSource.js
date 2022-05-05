const { context } = require('../base')

module.exports = function (API) {
  class ItemDefectReturnLabelSource extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ItemDefectReturnLabelSource] })
}