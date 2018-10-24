import { _ } from 'lodash';

const splitChord = (chord = '') => {
    return chord.match(/([CDEFGABC]['#b']?)?(\S*)/);
};

const transpose = (chord, semitones = 0) => {
    let splitedChord = splitChord(chord);
    if (_.isEmpty(splitedChord) || _.isEmpty(splitedChord[1])) {
        return chord;
    }
    let transposedChord = splitedChord[1];
    for (let i = 0; i < semitones ; i++) {
        transposedChord = transposeUp(transposedChord);
    }
    return transposedChord + splitedChord[2];
};


const transposeUp = (chord = '') => {
    switch (chord) {
        case 'C':
            return 'Db';
        case 'C#':
        case 'Db':
            return 'D';
        case 'D':
            return 'Eb';
        case 'D#':
        case 'Eb':
            return 'E';
        case 'E':
            return 'F';
        case 'F':
            return 'Gb';
        case 'F#':
        case 'Gb':
            return 'G';
        case 'G':
            return 'Ab';
        case 'G#':
        case 'Ab':
            return 'A';
        case 'A':
            return 'Bb';
        case 'A#':
        case 'Bb':
            return 'B';
        case 'B':
            return 'C';

    }
    return chord;
};

export {
    transpose
}