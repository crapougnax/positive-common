import { renderLabel, getWeekNumber, getPrevWeekNumber, getNextWeekNumber } from '..'

test('Render Label from string', () => {
  expect(renderLabel('label')).toBe('label')
})

test('Render Label from array', () => {
  expect(renderLabel({ fr: 'label' })).toBe('label')
})

test('Render Label from array and lang identifier', () => {
  expect(renderLabel({ en: 'label' }, 'en')).toBe('label')
})

test('Get short week number from date', () => {
  expect(getWeekNumber(new Date('2019-08-05'), true)).toBe('32')
})

test('Get long week number from date', () => {
  expect(getWeekNumber(new Date('2019-08-05'))).toBe('2019W32')
})

test('Get previous week number from date', () => {
  expect(getPrevWeekNumber(new Date('2019-08-05'))).toBe('2019W31')
  expect(getPrevWeekNumber(new Date('2019-08-05'), true)).toBe('31')
  expect(getPrevWeekNumber(new Date('2019-01-01'))).toBe('2018W52')
  expect(getPrevWeekNumber(new Date('2019-01-01'), true)).toBe('52')
})

test('Get next week number from date', () => {
  expect(getNextWeekNumber(new Date('2019-08-05'))).toBe('2019W33')
  expect(getNextWeekNumber(new Date('2019-08-05'), true)).toBe('33')
  expect(getNextWeekNumber(new Date('2019-12-31'))).toBe('2020W02')
  expect(getNextWeekNumber(new Date('2019-12-31'), true)).toBe('02')
})
