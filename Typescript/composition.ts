export const compose = (f,g) => x => g(f(x));

export const composeMany = (f, ...gs) => gs.length == 0 ? f : compose(composeMany(gs),f);

const f = x => x * x
const g = x => x + 1

console.log(compose(f,g)(2))
