function toCript() {
    let str = document.getElementById("text_input").value
    if (str != "") {
        document.getElementById("text_input").value = "";
        document.getElementById("output_background").style.display = "none";
        document.getElementById("clean").style.display = "block";
        genElement(encript(str));
    }
}

function toDecript() {
    let str = document.getElementById("text_input").value
    if (str != "") {
        document.getElementById("text_input").value = "";
        document.getElementById("output_background").style.display = "none";
        document.getElementById("clean").style.display = "block";
        genElement(decript(str));
    }
}

function encript(str) {
    let arr = [];
    for (let i = 0; i < str.length; ++i) {
        switch (str[i]) {
            case "e":
                arr.push("enter");
                break;
            case "i":
                arr.push("imes");
                break;
            case "a":
                arr.push("ai");
                break;
            case "o":
                arr.push("ober");
                break;
            case "u":
                arr.push("ufat");
                break;
            default:
                arr.push(str[i]);
                break;
        }
    }
    return arr.join("");
}

function decript(str) {
    let arr = [];
    for (let i = 0; i < str.length; ++i) {
        arr.push(str[i]);
        switch (str[i]) {
            case "e":
                i += 4;
                break;
            case "i":
                i += 3;
                break;
            case "a":
                i += 1;
                break;
            case "o":
                i += 3;
                break;
            case "u":
                i += 3;
                break;
        }
    }
    return arr.join("");
}

function genElement(str) {
    let tag = document.createElement("div");
    let text = document.createElement("p");
    let button = document.createElement("button");
    let img = document.createElement("img");

    img.src = "assets/copy-button.svg";

    text.innerHTML = str;

    button.setAttribute("class", "copy_button");
    button.onclick = () => navigator.clipboard.writeText(str);
    button.appendChild(img);

    tag.setAttribute("class", "messages");
    tag.appendChild(text);
    tag.appendChild(button);

    document.getElementById("list").appendChild(tag);
}

function clean() {
    document.querySelectorAll(".messages").forEach((list) => list.remove());
    document.getElementById("output_background").style.display = "flex";
    document.getElementById("clean").style.display = "none";
}