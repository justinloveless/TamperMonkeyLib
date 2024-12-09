export function toggleDubs() {
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
}