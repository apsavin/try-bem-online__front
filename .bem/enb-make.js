//@see https://github.com/enb-make/enb
module.exports = require('../node_modules/bem-node/enb-make')
    .pages('app/*')
    .levels([
        'node_modules/bem-controls/common.blocks',
        'node_modules/bem-controls/desktop.blocks',
        'blocks'
    ]);
