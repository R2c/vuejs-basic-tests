var Encore = require('@symfony/webpack-encore');

Encore
    .setPublicPath('/dist')
    .setOutputPath('dist/')
    .addEntry('build', './src/main.js')
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .enableVueLoader()
;

module.exports = Encore.getWebpackConfig();
