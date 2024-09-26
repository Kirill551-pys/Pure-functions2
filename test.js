import {getHealthStatus} from './app.js'

describe('getHealthStatus', () => {
  it('уровень здоровья превышает 50', () => {
    expect(getHealthStatus({ name: 'Mag', health: 90 })).toBe('green');
  });

  it('уровень здоровья составляет от 50 до 15', () => {
    expect(getHealthStatus({ name: 'Mag', health: 30 })).toBe('yellow');
  });

  it('запас здоровья составляет менее 15', () => {
    expect(getHealthStatus({ name: 'Mag', health: 10 })).toBe('red');
  });
});