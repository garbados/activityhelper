const { context } = require('../base')

module.exports = function (API) {
  class MissionCoveragePrioritiesPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MissionCoveragePrioritiesPolicy] })
}