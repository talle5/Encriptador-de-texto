function toCript() {
    let str = document.getElementById("input_stream").value
    if (str != "") {
        document.getElementById("input_stream").value = "";
        document.getElementById("output_background").style.display = "none";
        document.getElementById("clear-button").style.display = "block";
        genElement(encript(str));
    }
}

function toDecript() {
    let str = document.getElementById("input_stream").value
    if (str != "") {
        document.getElementById("input_stream").value = "";
        document.getElementById("output_background").style.display = "none";
        document.getElementById("clear-button").style.display = "block";
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
    let text = document.createTextNode(str);
    let button = document.createElement("button");
    let img = document.createElement("img");

    img.setAttribute("src", "assets/copy-button.svg");

    button.setAttribute("class", "copy-button");
    button.onclick = () => {
        navigator.clipboard.writeText(str);
    };
    button.appendChild(img);

    tag.setAttribute("class", "teste");
    tag.appendChild(text);
    tag.appendChild(button);
    
    document.getElementById("mensagems").appendChild(tag);
}

function clean() {
    document.querySelectorAll(".teste").forEach((mensagems) => {
        mensagems.remove();
    });
    document.getElementById("output_background").style.display = "flex";
    document.getElementById("clear-button").style.display = "none";
}