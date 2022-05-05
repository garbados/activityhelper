const { context } = require('../base')

module.exports = function (API) {
  class CarbohydrateContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CarbohydrateContent] })
}