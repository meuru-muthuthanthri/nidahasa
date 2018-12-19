import { Map } from 'immutable';
import { filterSongs, getSongs } from '../repository/SongsRepo';
import { Events } from '../Actions';


const initialState = Map({
    songs : {},
    filteredSongs: {},
});

const homeScreenReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case Events.global.APP_START:
            const songs = getSongs();
            return state.set('songs', songs).set('filteredSongs', songs);
        case Events.homeScreen.SEARCH_SONG:
            return state.set('filteredSongs', filterSongs(state.get('songs'), payload));
        case Events.homeScreen.CLEAR_SONG_SEARCH:
            console.log("#####");
            return state.set('filteredSongs', state.get('songs'));
    }
    return state
};

export default homeScreenReducer;