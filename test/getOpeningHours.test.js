const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('Testa se getOpeningHours() retorna todos os dias e os horários', () => {
        const expected = {
            Tuesday: { open: 8, close: 6 },
            Wednesday: { open: 8, close: 6 },
            Thursday: { open: 10, close: 8 },
            Friday: { open: 10, close: 8 },
            Saturday: { open: 8, close: 10 },
            Sunday: { open: 8, close: 8 },
            Monday: { open: 0, close: 0 }
        }
        expect(getOpeningHours()).toEqual(expected);
    })
    it('Testa se getOpeningHours("sunday", "10:00-AM") retorna o esperado', () => {
        expect(getOpeningHours('sunday', '10:00-AM')).toEqual('The zoo is open');
    })
    it('Testa se getOpeningHours("Monday", "09:00-AM") retorna o esperado', () => {
        expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    })
    it('Testa se getOpeningHours("1") retorna o erro esperado', () => {
        expect(() => getOpeningHours('1')).toThrow('The day must be valid. Example: Monday');
    })
    it('Testa se getOpeningHours("sunday", "nome") retorna o erro esperado', () => {
        expect(() => getOpeningHours('sunday', 'nome')).toThrow(`The hour should represent a number`);
    })
    it('Testa se getOpeningHours("Saturday", "09:C0-AM") retorna o erro esperado', () => {
        expect(() => getOpeningHours("Saturday", "09:C0-AM")).toThrow('The minutes should represent a number')
    })
    it('Testa se getOpeningHours("Tuesday", "09:00-ZM") retorna o erro esperado', () => {
        expect(() => getOpeningHours("Tuesday", "09:00-ZM")).toThrow('The abbreviation must be \'AM\' or \'PM\'')
    })
});
