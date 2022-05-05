const { context } = require('../base')

module.exports = function (API) {
  class Course extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Course] })
}