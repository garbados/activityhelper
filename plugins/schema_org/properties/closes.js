const { context } = require('../base')

module.exports = function (API) {
  class Closes extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Closes] })
}