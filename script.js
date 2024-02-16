function toCript() {
    let str = document.getElementById("input_stream").value
    if (str != "") {
        document.getElementById("input_stream").value = "";
        document.getElementById("output_background").style.display = "none";
        genElement(encript(str));
        //document.getElementById("output_stream").innerHTML = encript(str);
    }
}

function toDecript() {
    let str = document.getElementById("input_stream").value
    if (str != "") {
        document.getElementById("output_stream").innerHTML = decript(str);
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
    var tag = document.createElement("div");
    var text = document.createTextNode(str);
    let button = document.createElement("button");
    let img = document.createElement("img");

    img.setAttribute("src", "assets/bitmap.svg");
    button.setAttribute("class", "copy-button");
    button.appendChild(img);
    tag.setAttribute("class", "teste");
    tag.appendChild(text);
    tag.appendChild(button);
    // tag.style.width = "100%";
    var element = document.getElementById("mensagems");
    element.appendChild(tag);
}