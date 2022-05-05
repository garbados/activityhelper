const { context } = require('../base')

module.exports = function (API) {
  class Tool extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Tool] })
}