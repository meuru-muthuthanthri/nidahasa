import { expect } from 'chai';
import CommonManager from '../CommonManager';

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
});
