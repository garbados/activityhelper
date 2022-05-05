const { context } = require('../base')

module.exports = function (API) {
  class RoofLoad extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RoofLoad] })
}