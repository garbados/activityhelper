const { context } = require('../base')

module.exports = function (API) {
  class ExecutableLibraryName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExecutableLibraryName] })
}