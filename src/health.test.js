import healthRange from './health';

test('test to be healthy', () => {
  const object = {
    name: 'Маг',
    health: 90,
  };
  expect(healthRange(object)).toBe('healthy');
});

test('test to be critical', () => {
  const object = {
    name: 'мечник',
    health: 10,
  };
  expect(healthRange(object)).toBe('critical');
});

test('test to be wounded', () => {
  const object = {
    name: 'лучник',
    health: 40,
  };
  expect(healthRange(object)).toBe('wounded');
});
