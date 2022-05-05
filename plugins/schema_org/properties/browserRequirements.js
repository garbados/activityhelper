const { context } = require('../base')

module.exports = function (API) {
  class BrowserRequirements extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BrowserRequirements] })
}