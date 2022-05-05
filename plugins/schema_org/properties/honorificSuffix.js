const { context } = require('../base')

module.exports = function (API) {
  class HonorificSuffix extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HonorificSuffix] })
}