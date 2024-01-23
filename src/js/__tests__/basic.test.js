import sum from '../basic';
import power from '../app';


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