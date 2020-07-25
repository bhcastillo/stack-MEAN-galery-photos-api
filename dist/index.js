"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('el modo es ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
    console.log('### Development mode ###');
}
const app_1 = __importDefault(require("./app"));
async function main() {
    await app_1.default.listen(app_1.default.get('port'));
    console.log('server on port ', app_1.default.get('port'));
}
main();
