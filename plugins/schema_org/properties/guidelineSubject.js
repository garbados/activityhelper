const { context } = require('../base')

module.exports = function (API) {
  class GuidelineSubject extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GuidelineSubject] })
}