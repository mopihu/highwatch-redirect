const Command = require('command')
const Vec3 = require('tera-vec3')

module.exports = function HwRedirect(dispatch) {
  const command = Command(dispatch)

  const highwatchRedeem = new Vec3(22205, 4870, 6191)
  const highwatchBanker = new Vec3(22438, 1605, 5857)

  let enabled = true
  let currentZone

  dispatch.hook('S_LOAD_TOPO', 3, event => {
    currentZone = event.zone
  })

  dispatch.hook('S_SPAWN_ME', 2, event => {
    if (enabled && currentZone == 7031 && event.loc.equals(highwatchRedeem)) {
      event.loc = highwatchBanker
    }
    return true
  })

  command.add('hw', () => {
    enabled = !enabled
    command.message(enabled ? 'Highwatch Redirect enabled.' : 'Highwatch Redirect disabled.')
  })
}
