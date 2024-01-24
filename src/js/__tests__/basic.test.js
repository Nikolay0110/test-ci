import sum from '../basic';
// import power from '../app';

import { sorting, power } from '../app';

test('should sum', () => {
    const result = sum([1, 2, 3]);

    expect(result).toBe(6);
});


test('testing power healthy', () => {
    const input = {'name': 'Max', 'health': 90}

    const expected = 'healthy';
    const received = power(input);
    expect(received).toBe(expected);
});

test('testing power wounded', () => {
    const input = {'name': 'Nick', 'health': 49}

    const expected = 'wounded';
    const received = power(input);
    expect(received).toBe(expected);
});

test('testing power critical', () => {
    const input = {'name': 'Sam', 'health': 10}

    const expected = 'critical';
    const received = power(input);
    expect(received).toBe(expected);
});

test('testing sorting', () => {
    const mass = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]

    const received = sorting(mass);
    expect(received).toEqual(expected);
});