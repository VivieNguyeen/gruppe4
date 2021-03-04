console.log("hej");
const btn = document.getElementById('btn')
const messageBox = document.getElementById("popup-besked");
const checkImg = document.getElementById("checkImg");
const okay = document.getElementById("okay");

btn.addEventListener("click", function () {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const contry = document.getElementById('contry');
    const distri = document.getElementById('distri');
    const message = document.getElementById('message');
    const number = document.getElementById('number');
    const popup = document.getElementById("popup");

    //Tilføjer active class på pop up, og indsætter tekst efter inputs
    popup.classList.add("active");

    if (fname.value == "") {
        messageBox.innerText = "Indtast fornavn.";
        fname.focus();
        return false;
    }

    if (lname.value == "") {
        messageBox.innerText = "Indtast efternavn.";
        lname.focus();
        return false;
    }

    if (email.value == "") {
        messageBox.innerText = "Indtast email.";
        email.focus();
        return false;
    }


    if (number.value == "") {
        messageBox.innerText = "Indtast telefonnummer.";
        number.focus();
        return false;
    }


    if (contry.value == "") {
        messageBox.innerText = "Indtast hvilket land.";
        contry.focus();
        return false;
    }

    if (distri.value == "") {
        messageBox.innerText = "Indtast hvilken distributør";
        distri.focus();
        return false;
    }

    if (message.value == "") {
        messageBox.innerText = "Indtast besked";
        message.focus();
        return false;
    }

    else {
        messageBox.innerText = "Vi har modtaget din besked";
        checkImg.style.visibility = "visible";
        okay.style.visibility = "hidden";
    }
    //Det nummer her fortæller hvor lang delayen er i ms

    setTimeout(function () {
        window.location.reload();
    }, 2500)
})

okay.addEventListener("click", function(){
    popup.classList.remove("active");
})