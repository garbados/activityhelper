const { context } = require('../base')

module.exports = function (API) {
  class Citation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Citation] })
}