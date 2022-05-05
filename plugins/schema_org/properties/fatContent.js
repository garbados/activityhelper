const { context } = require('../base')

module.exports = function (API) {
  class FatContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FatContent] })
}