import { expect } from 'chai';
import CommonManager from '../CommonManager';
import ChordSheetJS from 'chordsheetjs';

describe('splitLyrics', () => {
    it('should split lyrics properly', () => {
        const hymn = '  C                    Am                  C                  Am\n' +
            '  හමුවෙන්නම් කඳු මුඳුනෙදි - පවසන්නම් කළ කී දේ\n' +
            'F                      G                    C           G\n' +
            '  දැන ගන්නට සමිඳුනි ඔබෙ ආදරේ\n' +
            'C\n' +
            '  පියෙන් පියට පා නඟලා - මුසුවීලා ආදරෙ ඔබෙ\n';
        const result = [
            { type: 'chord', line: '  C                    Am                  C                  Am' },
            { type: 'words', line: '  හමුවෙන්නම් කඳු මුඳුනෙදි - පවසන්නම් කළ කී දේ' },
            { type: 'chord', line: 'F                      G                    C           G' },
            { type: 'words', line: '  දැන ගන්නට සමිඳුනි ඔබෙ ආදරේ' },
            { type: 'chord', line: 'C' },
            { type: 'words', line: '  පියෙන් පියට පා නඟලා - මුසුවීලා ආදරෙ ඔබෙ' },
            { type: 'chord', line: '' }];
        expect(CommonManager.splitLyrics(hymn)).to.be.deep.equal(result);
    });

    it('should identify long chord lines correctly', () => {
      const hymn = '    F#m      E     A E      F#m\n' + 
        'අහෝ දෙවිඳුනී අහෝ දෙවිඳුනී\n' + 
        '    F#m    E     A   G   F#m\n' +
        'අහෝ ජේසුනී අහෝ  ජේසුනී';


      const result = CommonManager.splitLyrics(hymn);
      expect(result[0].type).to.be.equal('chord');
  });
});

describe('hasOnlyChordChars', () => {
  it('should work properly', () => {
    expect(CommonManager.hasOnlyChordChars('')).to.be.false;
    expect(CommonManager.hasOnlyChordChars('A')).to.be.true;
    expect(CommonManager.hasOnlyChordChars('A   A')).to.be.true;
    expect(CommonManager.hasOnlyChordChars('A   A\n')).to.be.true;
    expect(CommonManager.hasOnlyChordChars('    F#m      E     A E      F#m\n')).to.be.true;

    expect(CommonManager.hasOnlyChordChars('How are you\n')).to.be.false;
  })
});

describe('sanitizeChord', () => {
  it('should work properly', () => {
    expect(CommonManager.sanitizeChord('A')).to.be.equal('A');
    expect(CommonManager.sanitizeChord('F#m')).to.be.equal('F#');
  })
});

describe.only('ddd', () => {
  it('should work properly', () => {

    const chordSheet = `
    Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
    [C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]`.substring(1);


const parser = new ChordSheetJS.ChordSheetParser();
const song = parser.parse(chordSheet);

const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);

console.log(disp);
expect('A').to.be.equal('A');
  })
});