const { context } = require('../base')

module.exports = function (API) {
  class AssemblyVersion extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AssemblyVersion] })
}