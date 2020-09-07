const withImages = require('next-images')
module.exports = {
  // Target must be serverless
  target: 'serverless',
  withImages();
};
