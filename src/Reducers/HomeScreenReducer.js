import { Map } from 'immutable';
import { getSongs } from '../repository/SongsRepo';
import { Events } from '../Actions';


const initialState = Map({
    songs : {}
});

const homeScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case Events.global.APP_START:
            return state.set('songs', getSongs())
    }
    return state
};

export default homeScreenReducer;