const { context } = require('../base')

module.exports = function (API) {
  class ProgramType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProgramType] })
}