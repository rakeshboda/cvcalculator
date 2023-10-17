function onclick1() {
    document.getElementById("userinput").value += 1;
}

function onclick2() {
    document.getElementById("userinput").value += 2;
}

function onclick3() {
    document.getElementById("userinput").value += 3;
}

function onclick4() {
    document.getElementById("userinput").value += 4;
}

function onclick5() {
    document.getElementById("userinput").value += 5;
}

function onclick6() {
    document.getElementById("userinput").value += 6;
}

function onclick7() {
    document.getElementById("userinput").value += 7;
}

function onclick8() {
    document.getElementById("userinput").value += 8;
}

function onclick9() {
    document.getElementById("userinput").value += 9;
}

function onclick0() {
    document.getElementById("userinput").value += 0;
}

function onclickplus() {
    document.getElementById("userinput").value += "+";
}

function onclickminus() {
    document.getElementById("userinput").value += "-";
}

function onclickslash() {
    document.getElementById("userinput").value += "/";
}

function onclickstar() {
    document.getElementById("userinput").value += "*";
}

function onclickpoint() {
    document.getElementById("userinput").value += ".";
}

function onclickallclear() {
    document.getElementById("userinput").value = "";
}

function result() {
    try {
        document.getElementById("userinput").value = eval(document.getElementById("userinput").value);
    } catch (error) {
        document.getElementById("userinput").value = "Error";
    }
}