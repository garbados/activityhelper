const { context } = require('../base')

module.exports = function (API) {
  class StudyDesign extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StudyDesign] })
}