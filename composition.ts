export const compose = (f,g) => x => g(f(x));

const f = x => x * x
const g = x => x + 1

console.log(compose(f,g)(2))
