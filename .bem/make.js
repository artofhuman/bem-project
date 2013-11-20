/* jshint node:true */
/* global MAKE */

require('bem-environ/lib/nodes');

process.env.YENV = 'production';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-bl @ 0.3',
        'bem-components @ v1',
        'bem-lib-bl @ master'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'css',
            'ie.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];

    }

});

MAKE.decl('BundlesLevelNode', {
    buildMergedBundle: function() {
        return true;
    }
 });
