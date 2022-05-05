const { context } = require('../base')

module.exports = function (API) {
  class Repetitions extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Repetitions] })
}