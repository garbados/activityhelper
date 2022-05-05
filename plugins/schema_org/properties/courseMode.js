const { context } = require('../base')

module.exports = function (API) {
  class CourseMode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CourseMode] })
}