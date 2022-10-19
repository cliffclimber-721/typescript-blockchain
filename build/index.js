"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myPackage_1 = require("myPackage");
(0, myPackage_1.init)({
    url: "true"
});
(0, myPackage_1.exit)(1);
localStorage.clear();
class Block {
    constructor(data) {
        this.data = data;
    }
    static hello() {
        return "hi";
    }
}
