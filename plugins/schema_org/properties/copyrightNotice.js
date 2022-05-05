const { context } = require('../base')

module.exports = function (API) {
  class CopyrightNotice extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CopyrightNotice] })
}