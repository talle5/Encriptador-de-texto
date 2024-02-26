const encriptButton = document.getElementById("cript_button");
const decriptButton = document.getElementById("decript_button");
const textStream = document.getElementById("text_input");
const outputBackground = document.getElementById("output_background");
const cleanButton = document.getElementById("clean");

const decode = (action) => {
    let str = textStream.value;
    if (str != "") {
        textStream.value = "";
        outputBackground.style.display = "none";
        cleanButton.style.display = "block";
        genElement(action(str));
    }
};

encriptButton.onclick = () => decode(encript);
decriptButton.onclick = () => decode(decript);
cleanButton.onclick = () => {
    document.querySelectorAll(".messages").forEach((list) => list.remove());
    outputBackground.style.display = "flex";
    cleanButton.style.display = "none";
};

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
                if (str.substring(i, i + 5) == "enter") { i += 4; }
                break;
            case "a":
                if (str.substring(i, i + 2) == "ai") { i += 1; }
                break;
            case "o":
                if (str.substring(i, i + 4) == "ober") { i += 3; }
                break;
            case "u":
                if (str.substring(i, i + 4) == "ufat") { i += 3; }
                break;
            case "i":
                if (str.substring(i, i + 4) == "imes") { i += 3; }
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

    button.id = "copy_button";
    button.onclick = () => navigator.clipboard.writeText(str);
    button.appendChild(img);

    tag.setAttribute("class", "messages");
    tag.appendChild(text);
    tag.appendChild(button);

    document.getElementById("list").appendChild(tag);
}