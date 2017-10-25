interface Optional<A> {
    value?: A;
    valid: boolean;
}

const safe_reciprocal = (x) => {
    if (x !== 0) {
        return {
            value: 1 / x,
            valid: true
        };
    }
    return {
        valid: false
    }
}

const safe_root = (x) => {
    if (x >= 0) {
        return {
            value: Math.sqrt(x),
            valid: true
        }
    }
    return {
        valid: false
    }
}

export function composeOptional<A,B,C>(f: (x:A) => Optional<B>, g: (y:B) => Optional<C>) {
    return (x: A) => {
        const first = f(x);
        if (first.valid) {
            return g(first.value);
        }
        return {
            valid: false
        };
    };
}

const safe_inverse_root = composeOptional(safe_reciprocal, safe_root);

console.log(safe_root(9))
console.log(safe_reciprocal(0.5))

console.log(safe_inverse_root(0.25))
console.log(safe_inverse_root(1 / 9))
console.log(safe_inverse_root(9))

console.log(safe_inverse_root(-1))
console.log(safe_inverse_root(0))
