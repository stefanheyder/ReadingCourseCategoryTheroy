const memoize = (fn) => {
    let memoized = {

    };
    return (x) => {
        if (memoized[x]) {
            return memoized[x];
        }
        else {
            let result = fn(x);
            memoized[x] = result;
            return result
        }
    }

}

const time = () => new Date().getTime();
const fak = x => x > 0? x * fak (x - 1) : 1;

const memoizedFak = memoize(fak);

const t0 = time();
console.log(memoizedFak(1000));
const t1 = time();
console.log(memoizedFak(1000));
const t2 = time();

console.log(`First: ${t1 - t0}`);
console.log(`Second: ${t2 - t1}`);
