const { context } = require('../base')

module.exports = function (API) {
  class LearningResourceType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LearningResourceType] })
}