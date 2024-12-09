// ==UserScript==
// @name Your Script Name
// @description Your description here
// @version 1.0.2
// @author Your Name
// @match https://www.crunchyroll.com/simulcastcalendar*
// @grant GM_getValue
// @grant GM_setValue
// @iconURL https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com
// @namespace http://tampermonkey.net/
// @updateURL https://raw.githubusercontent.com/justinloveless/TamperMonkeyLib/main/dist/script.user.js
// ==/UserScript==

(()=>{"use strict";console.log("Tampermonkey Script Started"),console.log("Logging Stuff"),console.log("Toggling Dubs..."),function(){var e=document.createElement("input"),n=document.createTextNode("Show Dubs");e.id="dubs",e.type="checkbox",e.checked=GM_getValue("show_dubs"),e.addEventListener("change",(function(e){GM_setValue("show_dubs",e.currentTarget.checked),location.reload()}));var t=document.createElement("label");if(t.appendChild(e),t.appendChild(n),document.getElementById("filter_toggle_form").appendChild(t),!e.checked)for(var o=document.getElementsByClassName("releases"),c=0;c<o.length;c++)for(var l=o[c].children,d=0;d<l.length;d++)o[c].children[d].innerHTML.includes("Dub)")&&(o[c].children[d].innerHTML="")}()})();