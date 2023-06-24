const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePath: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
