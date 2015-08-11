function telephoneCheck(str) {
    var phoneNumber = /^1?[( ]*?\d{3}[- )]*?\d{3}[- ]?\d{4}$/;
    if (str.match(phoneNumber)){
        return true;
    } else {
        return false;
    }
}



console.log(telephoneCheck("156291209323"));