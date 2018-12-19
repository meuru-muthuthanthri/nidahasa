import _ from 'lodash';

const hymns = require('./Hymns');

const getSongs = () => {
    return _.reduce(hymns, (hymnArr, value, key) => {
        value['key'] = key;
        hymnArr.push(value);
        return hymnArr;
    }, []);
};

const filterSongs = (songs, payload) => {
    return _.filter(songs, (song) => song.key.includes(payload));
};

export {
    getSongs,
    filterSongs,
}