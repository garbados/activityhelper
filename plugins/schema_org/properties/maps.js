const { context } = require('../base')

module.exports = function (API) {
  class Maps extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Maps] })
}