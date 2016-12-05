// Código porco feito em 2 minutos, perdão pelos vacilos

var corpo = document.querySelector("tbody");

var trs = corpo.querySelectorAll("tr");

var dias = [];

for(var i = 0 ; i< 5; i++){
    dias[i] = 0;
}

trs.forEach(function(tr){
    var tds = tr.querySelectorAll("td");
    tds.forEach(function(td,i){
        if(td.textContent.length >= 3){
            dias[i]++;
        }
    })
});

var total = corpo.querySelector("tr:last-child");

var totalDias = total.querySelectorAll("td");

totalDias.forEach(function(td,i){
    td.textContent = dias[i];
});
