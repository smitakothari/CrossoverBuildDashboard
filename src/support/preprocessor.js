/**
 * Created by smita on 7/19/2016.
 */

var ReactTools = require('react-tools');

module.exports = {
    process: function(src) {
        return ReactTools.transform(src);
    }
};