const { context } = require('../base')

module.exports = function (API) {
  class StageAsNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StageAsNumber] })
}