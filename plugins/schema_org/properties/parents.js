const { context } = require('../base')

module.exports = function (API) {
  class Parents extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Parents] })
}