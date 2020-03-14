// Global variable, this variable is set in a function but required in every other function
var title;
var delay;
var notelist;

// Z to denote # because javascript can't handle it, so I will write ZA for #A
var audioA = new Audio('audio/A.wav')
var audioB = new Audio('audio/B.wav')
var audioC = new Audio('audio/C.wav')
var audioD = new Audio('audio/D.wav')
var audioE = new Audio('audio/E.wav')
var audioF = new Audio('audio/F.wav')
var audioG = new Audio('audio/G.wav')
var audioZA = new Audio('audio/ZA.wav')
var audioZB = new Audio('audio/ZB.wav')
var audioZC = new Audio('audio/ZC.wav')
var audioZD = new Audio('audio/ZD.wav')
var audioZE = new Audio('audio/ZE.wav')
var audioZF = new Audio('audio/ZF.wav')
var audioZG = new Audio('audio/ZG.wav')
var audioZZC = new Audio('audio/ZZC.wav')
var audioZZD = new Audio('audio/ZZD.wav')
var audioZZE = new Audio('audio/ZZE.wav')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function play() {
    if (document.getElementById("notes").innerHTML != "") {
        // If not empty, play the song
        var parent = document.getElementById("notes");
        var child = parent.getElementsByTagName('*');
        var i, e; // i for loop, e for element
        for (i = 0; i < child.length; ++i) {
            e = child[i];
            e.classList.add("active");
            if (e.innerHTML == "A") { audioA.load(); audioA.play(); }
            else if (e.innerHTML == "B") { audioC.load(); audioC.play(); }
            else if (e.innerHTML == "C") { audioC.load(); audioC.play(); }
            else if (e.innerHTML == "D") { audioD.load(); audioD.play(); }
            else if (e.innerHTML == "E") { audioE.load(); audioE.play(); }
            else if (e.innerHTML == "F") { audioF.load(); audioF.play(); }
            else if (e.innerHTML == "G") { audioG.load(); audioG.play(); }
            else if (e.innerHTML == "#A") { audioZA.load(); audioZA.play(); }
            else if (e.innerHTML == "#B") { audioZB.load(); audioZB.play(); }
            else if (e.innerHTML == "#C") { audioZC.load(); audioZC.play(); }
            else if (e.innerHTML == "#D") { audioZD.load(); audioZD.play(); }
            else if (e.innerHTML == "#E") { audioZE.load(); audioZE.play(); }
            else if (e.innerHTML == "#F") { audioZF.load(); audioZF.play(); }
            else if (e.innerHTML == "#G") { audioZG.load(); audioZG.play(); }
            else if (e.innerHTML == "##C") { audioZZC.load(); audioZZC.play(); }
            else if (e.innerHTML == "##D") { audioZZD.load(); audioZZD.play(); }
            else if (e.innerHTML == "##E") { audioZZE.load(); audioZZE.play(); }
            if ((noteList[i][0] == 2) || (noteList[i][0] == 3) || (noteList[i][0] == 4)) {
                await sleep(delay / noteList[i][0]);
            } else if (noteList[i] != "|") { // Don't give <br> a delay
                await sleep(delay);
            }
            e.classList.remove("active");
        }
    }
}

function konosuba() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var song = JSON.parse(this.responseText);

            title = song.title;
            delay = (60 / song.bpm) * 1000
            noteList = song.notes.split(" ");
            for (const item of noteList) {
                if (item == "|") {
                    var noteAtom = '<br>';
                }
                else if ((item[0] == 2) || (item[0] == 3) || (item[0] == 4)) {
                    var noteAtom = '<div class="noteAtom">' + item.substring(1) + '</div>';
                } else {
                    var noteAtom = '<div class="noteAtom">' + item + '</div>';
                }
                document.getElementById("notes").innerHTML += noteAtom;
            }
        }
    };
    xmlhttp.open("GET", "songs/konosuba-ed1.json", true);
    xmlhttp.send();
}
