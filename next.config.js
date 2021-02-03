const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const path = require("path");

const nextConfig = {
  images: {
    domains: [`randomuser.me`],
  },
};

const svgPlugins = withReactSvg({
  include: path.resolve(__dirname, "public/icons"),
  webpack(config, options) {
    return config;
  },
});

module.exports = withPlugins([[svgPlugins]], nextConfig);
