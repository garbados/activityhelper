const { context } = require('../base')

module.exports = function (API) {
  class Dcmitype extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Dcmitype] })
}