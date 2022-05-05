const { context } = require('../base')

module.exports = function (API) {
  class Assesses extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Assesses] })
}