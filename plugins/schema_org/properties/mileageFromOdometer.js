const { context } = require('../base')

module.exports = function (API) {
  class MileageFromOdometer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MileageFromOdometer] })
}