
// ==UserScript==
// @name         Remove Dubs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.crunchyroll.com/simulcastcalendar
// @match        https://www.crunchyroll.com/simulcastcalendar*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://raw.githubusercontent.com/justinloveless/TamperMonkeyLib/main/RemoveDubs/Remove%20Dubs.user.js

// ==/UserScript==

(function() {
    'use strict';

    const checkbox = document.createElement("input");
    const textNode = document.createTextNode("Show Dubs");
    checkbox.id = "dubs";
    checkbox.type="checkbox";
    checkbox.checked = GM_getValue("show_dubs");
    checkbox.addEventListener('change', (event) => {
        GM_setValue("show_dubs", event.currentTarget.checked);
        location.reload();
    })

    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(textNode);
    const form = document.getElementById("filter_toggle_form");
    form.appendChild(label);

    if (!checkbox.checked) {
        const days = document.getElementsByClassName("releases");
        for (var i = 0; i < days.length; i++){

            var items = days[i].children;
            for (var j = 0; j < items.length; j++){
                if (days[i].children[j].innerHTML.includes("Dub)")){
                    days[i].children[j].innerHTML = "";
                }
            }
        }
    }
})();