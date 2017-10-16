export const compose = (f,g) => x => f(g(x));

export const composeMany = (...fs) => fs.length == 1 ? f[0] : compose(f[0],composeMany(f).slice(1));

const f = x => x * x
const g = x => x + 1

console.log(composeMany(f,g)(2))
