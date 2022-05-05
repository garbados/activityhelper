const { context } = require('../base')

module.exports = function (API) {
  class ReleaseNotes extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReleaseNotes] })
}