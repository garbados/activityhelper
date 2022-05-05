const { context } = require('../base')

module.exports = function (API) {
  class VolumeNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VolumeNumber] })
}