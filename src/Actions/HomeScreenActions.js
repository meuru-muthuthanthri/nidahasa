const createAction = (type) => {
    return (payload) => ({ type, payload})
};

const Events = {
    'SELECT_SONG': 'SELECT_SONG'
};

const Actions = {
    selectSong: createAction(Events.SELECT_SONG)
};

export default {
    Events,
    Actions
}