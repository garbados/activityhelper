const { context } = require('../base')

module.exports = function (API) {
  class StupidProperty extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StupidProperty] })
}