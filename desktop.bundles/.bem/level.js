var PATH = require('path'),
    BEM = require('bem'),
    environ = require('bem-environ');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
                'bem-bl/blocks-common',
                'bem-bl/blocks-desktop',
                'bem-components',
                'bem-components/common.blocks',
                'bem-components/desktop.blocks',
                'bem-lib-bl'
            ]
            .map(function(path) { return PATH.resolve(environ.LIB_ROOT, path); })
            .concat([
                'common.blocks',
                'desktop.blocks'
            ]
            .map(function(path) { return PATH.resolve(environ.PRJ_ROOT, path); })))
    });

};
