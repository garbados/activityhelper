const { context } = require('../base')

module.exports = function (API) {
  class ActionableFeedbackPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ActionableFeedbackPolicy] })
}