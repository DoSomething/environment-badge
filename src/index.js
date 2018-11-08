// Only apply a badge in development environments, and if properly
// configured, remove this code block from production builds!
if (process.env.NODE_ENV !== 'production') {
  var host = window.location.host;
  var subdomain = host.split('.')[0];

  // Choose appearance based on the environment we're in:
  if (host.indexOf('.test') != -1 || host.indexOf('localhost') != -1) {
    var environmentName = 'local';
    var backgroundColor = '#ddd';
    var foregroundColor = '#000';
  } else if (subdomain.indexOf('-dev') != -1) {
    var environmentName = 'dev';
    var backgroundColor = '#fcd116';
    var foregroundColor = '#000';
  } else if (subdomain.indexOf('-qa') != -1) {
    var environmentName = 'qa';
    var backgroundColor = '#23b7fb';
    var foregroundColor = '#fff';
  }

  // Create the badge and add it to the page:
  if (environmentName) {
    var environmentBadge = document.createElement('div');
    environmentBadge.innerHTML = `
      <div style="display: block; position: absolute; top: -50px; left: -50px; width: 100px; height: 100px; background: ${backgroundColor}; color: ${foregroundColor}; transform: rotate(-45deg); z-index: 9999;">
        <span style="display: block; position: relative; top: 85%; font-size: 12px; text-align: center; font-weight: bold; text-transform: uppercase; transform: translateY(-50%); cursor: default;">
          ${environmentName}
        </span>
      </div>
    `;

    document.body.appendChild(environmentBadge);
  }
}
