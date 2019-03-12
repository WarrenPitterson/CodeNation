const app = require('../app.js')

test('should equal 5 when passed 2 and 3',() => {
    expect(app.add(2,3)).toBe(5);
})

test('should contain Warren',() => {
    expect(app.myArray).toContain("Warren");
})

test('should equal 1 when passed 3 and 2',() => {
    expect(app.subtract(3,2)).toBe(1);
})

test('should equal 6 when passed 2 and 3',() => {
    expect(app.multiply(2,3)).toBe(6);
})

test('should equal 2 when passed 4 and 2',() => {
    expect(app.division(4,2)).toBe(2);
})