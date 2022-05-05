const { context } = require('../base')

module.exports = function (API) {
  class GuidelineDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GuidelineDate] })
}