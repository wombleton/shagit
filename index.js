var crypto = require('crypto');

module.exports = function(s) {
    var buf = new Buffer(s),
        header = new Buffer('blob ' + buf.length + '\0');

    return crypto.createHash('sha1').update(Buffer.concat([header, buf])).digest('hex');
}
