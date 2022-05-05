const { context } = require('../base')

module.exports = function (API) {
  class TrailerWeight extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TrailerWeight] })
}