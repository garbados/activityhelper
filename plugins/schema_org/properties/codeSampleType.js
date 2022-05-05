const { context } = require('../base')

module.exports = function (API) {
  class CodeSampleType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CodeSampleType] })
}