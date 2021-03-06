var epr = require('edp-provider-rider');
var riderUI = require('../lib');

function stylusConfig(style) {
    style.use(epr.plugin());
    style.use(riderUI());
}
exports.stylus = epr.stylus;

exports.port = 8848;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;

exports.getLocations = function () {
    return [
        { 
            location: /\.css($|\?)/, 
            handler: [
                autocss({
                    stylus: {
                        use: stylusConfig
                    }
                })
            ]
        },
        {
            location: '*.html',
            handler: [
                file(),
                livereload()
            ]
        },
        {
            location: /^.*$/, 
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

exports.injectResource = function (res) {
    for (var key in res) {
        global[key] = res[key];
    }
};
