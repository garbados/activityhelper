const { context } = require('../base')

module.exports = function (API) {
  class ProgrammingModel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProgrammingModel] })
}