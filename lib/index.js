/**
 * rider-ui
 * 
 * @author firede(firede@firede.us)
 */


/**
 * stylus plugin
 * 
 * @param {Object} options
 * @return {Function}
 */
function plugin() {
    return function(style) {
        // include rider ui
        style.include(__dirname);
    };
}

module.exports = plugin;

exports.version = require('../package.json').version;
