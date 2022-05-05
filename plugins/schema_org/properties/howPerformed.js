const { context } = require('../base')

module.exports = function (API) {
  class HowPerformed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HowPerformed] })
}