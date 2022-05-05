const { context } = require('../base')

module.exports = function (API) {
  class MusicCompositionForm extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MusicCompositionForm] })
}