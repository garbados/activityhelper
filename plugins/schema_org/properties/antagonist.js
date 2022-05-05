const { context } = require('../base')

module.exports = function (API) {
  class Antagonist extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Antagonist] })
}