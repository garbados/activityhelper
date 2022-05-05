const { context } = require('../base')

module.exports = function (API) {
  class InstallUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InstallUrl] })
}