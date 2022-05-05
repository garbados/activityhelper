const { context } = require('../base')

module.exports = function (API) {
  class StudyLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StudyLocation] })
}