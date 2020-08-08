const sum = require('./app')

test('Addition check...', () => {
    const add = addition(2,2)
    expect(add).toBe(4)
})

test('Multiplication check...', () => {
    const mul = multiply(6,2)
    expect(mul).toBe(12)
})

test('Division check...', () => {
    const div = divide(3,6)
    expect(div).toBe(0.5)
})