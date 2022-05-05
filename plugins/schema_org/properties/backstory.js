const { context } = require('../base')

module.exports = function (API) {
  class Backstory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Backstory] })
}