module.exports = {
    libraries : require('bem').util.extend(require('../repo.db'), {
        'bem-controls': {
            type     : 'git',
            url      : 'git://github.com/bem/bem-controls.git',
            npmPackages: false
        },
        'bem-lib-bl' : {
            type     : 'git',
            url      : 'git@github.com:artofhuman/bem-lib-bl.git',
            npmPackages: false
        }
    })
}
