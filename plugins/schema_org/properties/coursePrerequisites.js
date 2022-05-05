const { context } = require('../base')

module.exports = function (API) {
  class CoursePrerequisites extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CoursePrerequisites] })
}