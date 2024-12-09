// ==UserScript==
// @name Your Script Name
// @description Your description here
// @version 1.0.3
// @author Your Name
// @match https://www.crunchyroll.com/simulcastcalendar*
// @grant GM_getValue
// @grant GM_setValue
// @iconURL https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com
// @namespace http://tampermonkey.net/
// @updateURL https://raw.githubusercontent.com/justinloveless/TamperMonkeyLib/main/dist/script.user.js
// ==/UserScript==

(()=>{"use strict";console.log("Tampermonkey Script Started (using webpack)"),function(){var e=document.createElement("input"),n=document.createTextNode("Show Dubs");e.id="dubs",e.type="checkbox",e.checked=GM_getValue("show_dubs"),e.addEventListener("change",(function(e){GM_setValue("show_dubs",e.currentTarget.checked),location.reload()}));var t=document.createElement("label");if(t.appendChild(e),t.appendChild(n),document.getElementById("filter_toggle_form").appendChild(t),!e.checked)for(var c=document.getElementsByClassName("releases"),d=0;d<c.length;d++)for(var r=c[d].children,l=0;l<r.length;l++)c[d].children[l].innerHTML.includes("Dub)")&&(c[d].children[l].innerHTML="")}()})();