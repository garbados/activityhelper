const { context } = require('../base')

module.exports = function (API) {
  class UnnamedSourcesPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UnnamedSourcesPolicy] })
}