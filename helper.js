var dark= true;
function loadTheme(theme) {
    var prev_theme = document.getElementsByTagName('link')[0];
    prev_theme.setAttribute('href',theme);
    localStorage.setItem("mytheme",theme);
}

function light_mode() {
    var prev_theme = document.getElementsByTagName('link')[0];

    prev_theme.setAttribute('href',"altstyle.css");
    localStorage.setItem("mytheme","altstyle.css");
}
function dark_mode() {
    var prev_theme = document.getElementsByTagName('link')[0];

    prev_theme.setAttribute('href',"style.css");
    localStorage.setItem("mytheme","style.css");
}

window.onload = function() {
    if (localStorage.getItem("mytheme") == "altstyle.css"){
            loadTheme(localStorage.getItem("mytheme"));
    }
    else {
        loadTheme("style.css");
    }
}