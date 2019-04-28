import { Map } from 'immutable';
import { Events } from '../Actions';
import { transpose } from 'chord-transposer';
import CommonManager from '../logic/CommonManager';

const initialState = Map({
    selectedSong : {},
    song: '',
    chord: ''
});

const chordsPageReducer = (state = initialState, action ) => {
    const { type, payload } = action;
    switch (type) {
        case Events.homeScreen.SELECT_SONG:
            return state
                .set('selectedSong', payload)
                .set('song', payload.body)
                .set('chord', normalizeChord(CommonManager.sanitizeChord(payload.chord)));
        case Events.chordsPage.TRANSPOSE_SONG: {
            try {
                const song = transpose(state.get('selectedSong').body).fromKey(state.get('selectedSong').chord).toKey(payload).toString();
                return state
                    .set('chord', payload)
                    .set('song', song)
            } catch (e) {
                console.log(e);
            }
            return state
        }
    }
    return state
};

const normalizeChord = (chord) => {
    switch (chord) {
        case 'A#':
            return 'Bb';
        case 'C#':
            return 'Db';
        case 'D#':
            return 'Eb';
        case 'F#':
            return 'Gb';
        case 'G#':
            return 'Ab';
        default:
            return chord;
    }
};

export default chordsPageReducer;