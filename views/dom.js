var animals = [];

function loadAnimals(animalArray) {
    animals = animalArray;
    console.log(animals);
}

$(document).ready(function(){
var bod = document.getElementsByTagName("body");
var div = document.createElement("div");
var sel = document.createElement("select");
for (var i=0; i< animals.length; i++) {
    var option = document.createElement("option");
    option.value = animals[i].abv;
    option.text = animals[i].name;
    sel.appendChild(option);
}
sel.id = "modified";
sel.setAttribute('onclick', "ChangeAnInfo()");
sel.setAttribute('size', '10');
div.appendChild(sel);
div.setAttribute('style', "display:inline-block;margin-right:10px; width:200px");
document.body.appendChild(div);

var div1 = document.createElement('div');
var para = document.createElement('p');
para.setAttribute('id', 'info');
para.innerHTML = '--';
div1.appendChild(para);
div1.setAttribute('style', "display:inline-block; width:200px;");
document.body.appendChild(div1);
});

function findIndex(selected) {
    for (var i = 0; i < animals.length; i++){
        if (animals[i].abv == selected) {
            return i;
        }
    }
}

function ChangeAnInfo() {
    var animalList = document.getElementById('modified');
    var infoSlot = document.getElementById("info");
    var selAn = animalList.value;
    var ans = findIndex(selAn);
    infoSlot.innerHTML = animals[ans].des;
} 