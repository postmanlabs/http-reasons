var /**
     * @private
     * @type {Object}
     */
    db = require('./db.json');

module.exports = {
    /**
     * @param {String|Number} code
     * @returns {Object} - {name:String, detail:String}
     */
    lookup: function httpCodeLookup (code) {
        return (code = db[code]) ? {
            name: code.name,
            detail: code.detail
        } : {};
    }
};
