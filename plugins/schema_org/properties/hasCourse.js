const { context } = require('../base')

module.exports = function (API) {
  class HasCourse extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasCourse] })
}