function displayName(x) {
    document.getElementById(x.alt).style.visibility = "visible";
    document.getElementById(x.alt).style.opacity = "1";
}
function hideName(x) {
    document.getElementById(x.alt).style.visibility = "hidden";
    document.getElementById(x.alt).style.opacity = "0";
}

function alertName(x) {
    alert(x.alt);
}