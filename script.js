function Validate() {
    var radios = document.getElementsByName('radio1')

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        return true;
    }
    };

    document.getElementById("messages").innerHTML="*Dette felt skal udfyldes"


    var radios = document.getElementsByName('radio2')

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        return true;
    }
    };

    document.getElementById("messages2").innerHTML="*Dette felt skal udfyldes"
    return false;
}
