const { context } = require('../base')

module.exports = function (API) {
  class ImagingTechnique extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ImagingTechnique] })
}