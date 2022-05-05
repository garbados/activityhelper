const { context } = require('../base')

module.exports = function (API) {
  class Object extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Object] })
}