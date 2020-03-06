function konosuba() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var song = JSON.parse(this.responseText);
        document.getElementById("chord").innerHTML = song.chord;
    }
    };
    xmlhttp.open("GET", "song.json", true);
    xmlhttp.send();
}