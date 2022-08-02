const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se handlerElephants() retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se handlerElephants("count") retorna o número de residentes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Testa se handlerElephants("names") retorna o esperado', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(expected);
  });
  it('Testa se handlerElephants("averageAge") retorna a média esperada', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Testa se handlerElephants("location") retorna a localização esperada', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
