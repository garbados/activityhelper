const { context } = require('../base')

module.exports = function (API) {
  class Masthead extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Masthead] })
}