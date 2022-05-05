const { context } = require('../base')

module.exports = function (API) {
  class WorkPresented extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorkPresented] })
}