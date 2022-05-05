const { context } = require('../base')

module.exports = function (API) {
  class HasDriveThroughService extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasDriveThroughService] })
}