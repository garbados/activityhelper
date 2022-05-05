const { context } = require('../base')

module.exports = function (API) {
  class Participant extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Participant] })
}