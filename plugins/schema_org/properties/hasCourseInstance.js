const { context } = require('../base')

module.exports = function (API) {
  class HasCourseInstance extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasCourseInstance] })
}