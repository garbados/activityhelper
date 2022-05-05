const { context } = require('../base')

module.exports = function (API) {
  class TransFatContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TransFatContent] })
}