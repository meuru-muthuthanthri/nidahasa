const createAction = (type) => {
    return (payload) => ({ type, payload})
};

const Events = {
    'TRANSPOSE_SONG': 'TRANSPOSE_SONG'
};

const Actions = {
    transposeSong: createAction(Events.TRANSPOSE_SONG)
};

export default {
    Events,
    Actions
}