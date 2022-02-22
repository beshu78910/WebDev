import {franc, francAll} from 'franc'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let langs = require('langs');
let strings = "toi thich ca";
let input = process.argv[2];
const langsCode = franc(input);
const giveName = langs.where('3', langsCode);
console.log(giveName.name);