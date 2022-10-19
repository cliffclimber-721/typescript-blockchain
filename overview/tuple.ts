const showPlayer: readonly[string, number, boolean] = ["cho", 1, true];
showPlayer[0] = "hi"; // because of READONLY, error

let a : undefined = undefined;
let b : null = null; // null settings