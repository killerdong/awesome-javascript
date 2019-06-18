const _ = require('lodash');

module.exports = {
    add(str) {
        return _.isEmpty(str) ? 0 
            : str.split(/,|:/)
                .map(number => +number)
                .reduce((sum, number) => sum + number, 0);
    }
}