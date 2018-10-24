import _ from 'lodash';

const hymns = require('./Hymns');

const getSongs = () => {
    return _.reduce(hymns, (hymnArr, value, key) => {
        value['key'] = key;
        hymnArr.push(value);
        return hymnArr;
    }, []);
};

export {
    getSongs
}