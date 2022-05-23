import * as test from './destructuring.js'//named import
import external, { j, my } from "./destructuring.js"; //default import
// import {j, r} from './destructuring.js'
// import {j as varJ, r as varR}  from './destructuring.js'

console.log(external);
my()