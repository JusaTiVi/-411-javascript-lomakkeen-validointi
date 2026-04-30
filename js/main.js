function tarkista() {
    let ID = document.getElementById("kayttaja").value;
    let salasana = document.getElementById("salasana").value;
    let nimi = document.getElementById("nimi").value;
    let osoite = document.getElementById("osoite").value;
    let maa = document.getElementById("maa").value;
    let posti = document.getElementById("postinumero").value;
    let postinumero = /^\d+$/.test(posti);
    let sahkoposti = document.getElementById("sahkoposti").value;
    var mies = document.getElementById("mies");
    var nainen = document.getElementById("nainen");
    var kieli = document.getElementById("kieli");
    let numerot = /\d/;
    let erikoismerkit = /[!@£$€&%#]/;
    let isotkirjaimet = /[A-Z]/;

    if (ID === "") {
        document.getElementById("virhe1").textContent =
        "tämä kenttä on pakollinen!";

    }
    else if (ID.length < 6) {
        document.getElementById("virhe1").textContent =
        "käyttäjän ID pitää olla vähintään 6 merkkiä pitkä!"
    }
    else {
        document.getElementById("virhe1").textContent =
        "";
    }
    
    if (salasana === "") {
        document.getElementById("virhe2").textContent =
        "tämä kenttä on pakollinen!";

    }

    else if (salasana.length < 6) {
        document.getElementById("virhe2").textContent =
        "salasanan pitää olla vähintään 6 merkkiä pitkä!"
    }

    else if (!numerot.test(salasana) 
    ||!erikoismerkit.test(salasana)
    ||!isotkirjaimet.test(salasana)) {
        document.getElementById("virhe2").textContent =
        "salasanassa pitää olla vähintään yksi iso kirjain, numero ja erikoismerkki!"
    }
    
    else {
        document.getElementById("virhe2").textContent =
        "";
    }

    if (nimi === "") {
        document.getElementById("virhe3").textContent =
        "tämä kenttä on pakollinen!";

    }
    else {
        document.getElementById("virhe3").textContent =
        "";
    }

    if (osoite === "") {
        document.getElementById("virhe4").textContent =
        "tämä kenttä on pakollinen!";

    }
    else {
        document.getElementById("virhe4").textContent =
        "";
    }

    if (maa === "Valitse maa") {
        document.getElementById("virhe5").textContent =
        "tämä kenttä on pakollinen!";

    }
    else {
        document.getElementById("virhe5").textContent =
        "";
    }

    if (posti === "") {
        document.getElementById("virhe6").textContent =
        "tämä kenttä on pakollinen!";

    }
    else if (postinumero === false) {
        document.getElementById("virhe6").textContent =
        "postinumeron pitää koostua vain numeroista!"
    }
    else if (posti.length != 5) {
        document.getElementById("virhe6").textContent =
        "postinumerossa pitää olla 5 numeroa!"
    }
    else {
        document.getElementById("virhe6").textContent =
        "";
    }

    if (sahkoposti === "") {
        document.getElementById("virhe7").textContent =
        "tämä kenttä on pakollinen!";

    }
    else {
        document.getElementById("virhe7").textContent =
        "";
    }

    if (mies.checked == true) {
        document.getElementById("virhe8").textContent =
        "";

    }

    else if (nainen.checked == true) {
        document.getElementById("virhe8").textContent =
        "";

    }

    else {
        document.getElementById("virhe8").textContent =
        "tämä kenttä on pakollinen!";
    }

    if (kieli.checked == false) {
        document.getElementById("virhe9").textContent =
        "tämä kenttä on pakollinen!";

    }
    else {
        document.getElementById("virhe9").textContent =
        "";
    }

}