const stringCaculator = require('../lib/stringCaculator');


describe('구분자(,:)를 이용하여 문자열을 분리하여 계산하는 계산기', () => {
    test('빈 문자열을 받을 경우 0을 출력', () => {
        const result = stringCaculator.add('');
        expect(result).toEqual(0);
    });

    test('1,2 문자열을 받을 경우 3을 출력', () => {
        const result = stringCaculator.add('1,2');
        expect(result).toEqual(3);
    });

    test('1,2,3 문자열을 받을 경우 6을 출력', () => {
        const result = stringCaculator.add('1,2,3');
        expect(result).toEqual(6);
    });

    test('1,2:3 문자열을 받을 경우 6을 출력', () => {
        const result = stringCaculator.add('1,2:3');
        expect(result).toEqual(6);
    });

});