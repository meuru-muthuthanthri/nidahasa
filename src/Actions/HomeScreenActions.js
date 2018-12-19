const createAction = (type) => {
    return (payload) => ({ type, payload})
};

const Events = {
    'SELECT_SONG': 'SELECT_SONG',
    'SEARCH_SONG': 'SEARCH_SONG',
    'CLEAR_SONG_SEARCH': 'CLEAR_SONG_SEARCH',
};

const Actions = {
    selectSong: createAction(Events.SELECT_SONG),
    searchSong: createAction(Events.SEARCH_SONG),
    clearSearch: createAction(Events.CLEAR_SONG_SEARCH),
};

export default {
    Events,
    Actions
}