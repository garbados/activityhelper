const { context } = require('../base')

module.exports = function (API) {
  class PermissionType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PermissionType] })
}