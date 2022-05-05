const { context } = require('../base')

module.exports = function (API) {
  class LabelDetails extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LabelDetails] })
}