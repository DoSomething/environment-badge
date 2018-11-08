export default () => {
  const host = window.location.host;
  const subdomain = host.split('.')[0];

  // Choose appearance based on the environment we're in:
  let environmentName, backgroundColor, foregroundColor;
  if (host.indexOf('.test') != -1 || host.indexOf('localhost') != -1) {
    environmentName = 'local';
    backgroundColor = '#ddd';
    foregroundColor = '#000';
  } else if (subdomain.indexOf('-dev') != -1) {
    environmentName = 'dev';
    backgroundColor = '#fcd116';
    foregroundColor = '#000';
  } else if (subdomain.indexOf('-qa') != -1) {
    environmentName = 'qa';
    backgroundColor = '#23b7fb';
    foregroundColor = '#fff';
  }

  // Create the badge and add it to the page:
  if (environmentName) {
    const environmentBadge = document.createElement('div');
    environmentBadge.innerHTML = `
        <div style="display: block; position: absolute; top: -50px; left: -50px; width: 100px; height: 100px; background: ${backgroundColor}; color: ${foregroundColor}; transform: rotate(-45deg); z-index: 9999;">
          <span style="display: block; position: relative; top: 85%; font-size: 12px; text-align: center; font-weight: bold; text-transform: uppercase; transform: translateY(-50%); cursor: default;">
            ${environmentName}
          </span>
        </div>
      `;

    // Apply badge to Forge container if it exists, or the body:
    const container = document.querySelector('.chrome > .wrapper') || document.body;
    container.appendChild(environmentBadge);
    container.style.overflow = 'hidden'; // awkward, but required so badge doesn't overflow!
  }
}
