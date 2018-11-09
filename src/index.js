const DEFAULT_ENVIRONMENTS = [
  {
    name: 'local',
    host: /(^localhost$|\.test$)/,
  },
  {
    name: 'dev',
    host: /^([a-z0-9-]*-)?dev\./,
    backgroundColor: '#fcd116',
  },
  {
    name: 'qa',
    host: /^([a-z0-9-]*-)?qa\./,
    backgroundColor: '#23b7fb',
    foregroundColor: '#fff',
  },
  {
    name: 'preview',
    host: /^([a-z0-9-]*-)?preview\./,
    backgroundColor: '#22BC66',
    foregroundColor: '#fff',
  }
]

export default (environments = DEFAULT_ENVIRONMENTS) => {
  const environment = environments.find(
    environment => environment.host.test(window.location.host)
  );

  // Create the badge and add it to the page:
  if (environment) {
    const { name, backgroundColor = '#ddd', foregroundColor = '#000' } = environment;
    const environmentBadge = document.createElement('div');
    environmentBadge.innerHTML = `
        <div style="display: block; position: absolute; top: -50px; left: -50px; width: 100px; height: 100px; background: ${backgroundColor}; color: ${foregroundColor}; transform: rotate(-45deg); z-index: 9999;">
          <span style="display: block; position: relative; top: 85%; font-size: 12px; text-align: center; font-weight: bold; text-transform: uppercase; transform: translateY(-50%); cursor: default;">
            ${name}
          </span>
        </div>
      `;

    // Apply badge to Forge container if it exists, or the body:
    const container = document.querySelector('.chrome > .wrapper') || document.body;
    container.appendChild(environmentBadge);
    container.style.overflow = 'hidden'; // awkward, but required so badge doesn't overflow!
  }
}
