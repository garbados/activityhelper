const { context } = require('../base')

module.exports = function (API) {
  class CourseCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CourseCode] })
}