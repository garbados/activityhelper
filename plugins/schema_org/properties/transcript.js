const { context } = require('../base')

module.exports = function (API) {
  class Transcript extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Transcript] })
}