const Vec3 = require('tera-vec3');

module.exports = function HwRedirect(mod) {
  const highwatchRedeem = new Vec3(22205, 4870, 6191);
  const highwatchBanker = new Vec3(22438, 1605, 5857);

  let enabled = true;

  mod.hook('S_SPAWN_ME', 3, event => {
    if (enabled && mod.game.me.zone == 7031 && event.loc.equals(highwatchRedeem)) {
      event.loc = highwatchBanker;
    }
    return true;
  })

  mod.command.add('hw', () => {
    enabled = !enabled;
    mod.command.message(enabled ? 'Highwatch Redirect enabled.' : 'Highwatch Redirect disabled.');
  })
  
  this.destructor = function() {
    mod.command.remove('hw');
  }
}
