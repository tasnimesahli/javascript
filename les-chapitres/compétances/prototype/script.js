function number() {
    let table=["c1","c3","c1","c2"];
    let choisi="c1";
    let compteur=0;
    for (let i = 0; i<table.length; i++) {
    if (table[i]===choisi) {
        compteur++;
    }
 }
console.log("le nombre totale "+choisi +"est" +compteur);
}
number();