const { context } = require('../base')

module.exports = function (API) {
  class ProgramPrerequisites extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProgramPrerequisites] })
}