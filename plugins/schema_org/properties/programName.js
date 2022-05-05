const { context } = require('../base')

module.exports = function (API) {
  class ProgramName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProgramName] })
}