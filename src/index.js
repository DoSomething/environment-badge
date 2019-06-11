const DEFAULT_ENVIRONMENTS = [
  {
    displayName: 'local',
    host: /(^localhost(:[0-9]+)?$|\.test$)/,
  },
  {
    displayName: 'dev',
    host: /^([a-z0-9-]*-)?dev\./,
    backgroundColor: '#fcd116',
  },
  {
    displayName: 'qa',
    host: /^([a-z0-9-]*-)?qa\./,
    backgroundColor: '#23b7fb',
    foregroundColor: '#fff',
  },
  {
    displayName: 'preview',
    host: /^([a-z0-9-]*-)?preview\./,
    backgroundColor: '#22BC66',
    foregroundColor: '#fff',
  }
]

export default (environments = DEFAULT_ENVIRONMENTS) => {
  let environment = null;
  for (let i = 0; i < environments.length; i++) {
    if (environments[i].host.test(window.location.host)) {
      environment = environments[i]
      break;
    }
  }

  // Create the badge and add it to the page:
  if (environment) {
    const { displayName, backgroundColor = '#ddd', foregroundColor = '#000' } = environment;
    const environmentBadge = document.createElement('div');
    environmentBadge.innerHTML = '\
        <div style="display: block; position: absolute; top: -50px; left: -50px; width: 100px; height: 100px; background: ' + backgroundColor + '; color: ' + foregroundColor + '; transform: rotate(-45deg); z-index: 9999;">\
          <span style="display: block; position: relative; top: 85%; font-size: 12px; text-align: center; font-weight: bold; text-transform: uppercase; transform: translateY(-50%); cursor: default;">\
            ' + displayName + '\
          </span>\
        </div>\
      ';

    // Apply badge to Forge container if it exists, or the body:
    const container = document.querySelector('.chrome > .wrapper') || document.body;
    container.appendChild(environmentBadge);
    container.style.overflow = 'hidden'; // awkward, but required so badge doesn't overflow!
  }
}
