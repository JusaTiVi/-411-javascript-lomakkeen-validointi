function tarkista() {
    let ID = document.getElementById("kayttaja").value;
    let salasana = document.getElementById("salasana").value;
    let nimi = document.getElementById("nimi").value;
    let osoite = document.getElementById("osoite").value;
    let maa = document.getElementById("maa").value;
    let posti = document.getElementById("postinumero").value;
    let sahkoposti = document.getElementById("sahkoposti").value;
    let sukupuoli = document.getElementById("sukupuoli").value;
    let kieli = document.getElementById("kieli").value;

    if (ID === "") {
        document.getElementById("virhe1").textContent =
        "tämä kenttä on pakollinen!";
        return;
    }

    if (salasana = "") {
        document.getElementById("virhe2").textContent =
        "tämä kenttä on pakollinen!";
        return
    }

    if (nimi = "") {
        document.getElementById("virhe3").textContent =
        "tämä kenttä on pakollinen!";
        return
    }

    if (osoite = "") {
        document.getElementById("virhe4").textContent =
        "tämä kenttä on pakollinen!";
        return
    }

    if (maa = "(Valitse maa)") {
        document.getElementById("virhe5").textContent =
        "tämä kenttä on pakollinen!";
        return
    }

    if (posti = "") {
        document.getElementById("virhe6").textContent =
        "tämä kenttä on pakollinen!";
        return
    }

    if (sahkoposti = "") {
        document.getElementById("virhe7").textContent =
        "tämä kenttä on pakollinen!";
        return
    }

    if (sukupuoli = "") {
        document.getElementById("virhe8").textContent =
        "tämä kenttä on pakollinen!";
        return
    }

    if (kieli = "") {
        document.getElementById("virhe9").textContent =
        "tämä kenttä on pakollinen!";
        return
    }

}