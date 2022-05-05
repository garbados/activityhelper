const { context } = require('../base')

module.exports = function (API) {
  class MenuAddOn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MenuAddOn] })
}