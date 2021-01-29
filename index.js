function parse (c) {
    var output = {};
    try {
        c.split(/\s*;\s*/).forEach(function(pair) {
            pair = pair.split(/\s*=\s*/);
            output[pair[0]] = pair.splice(1).join('=');
        });
        return output;
    } catch (e) {
        return output;
    }
}

function list (c) {
    return Object.keys(parse(c))
}

module.exports = {
    parse,
    list
}