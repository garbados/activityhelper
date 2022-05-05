const { context } = require('../base')

module.exports = function (API) {
  class SampleType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SampleType] })
}