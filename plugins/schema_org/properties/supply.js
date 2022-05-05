const { context } = require('../base')

module.exports = function (API) {
  class Supply extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Supply] })
}