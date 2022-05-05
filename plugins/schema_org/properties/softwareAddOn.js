const { context } = require('../base')

module.exports = function (API) {
  class SoftwareAddOn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SoftwareAddOn] })
}