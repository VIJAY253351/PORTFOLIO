let v = 0;

function increment() {
    v++;
    document.getElementById("inc").innerHTML = v;
}

function save() {
    document.getElementById("saveit").innerText += v + "-";
}