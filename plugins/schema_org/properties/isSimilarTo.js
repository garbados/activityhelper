const { context } = require('../base')

module.exports = function (API) {
  class IsSimilarTo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsSimilarTo] })
}