// ==UserScript==
// @name         Your Script Name
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Your description here
// @author       You
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

import { logStuff } from './module1.js';

console.log('Tampermonkey Script Started');
logStuff();