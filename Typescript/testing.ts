export const assert = (actual, expected) => {
    if (actual != expected) {
        console.error(`Expected ${expected} but got ${actual}`);
    }
}
