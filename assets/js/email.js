function sendEmail() {
    let _email = $("#email")[0].value;
    let _name = $("#name")[0].value;
    let _message = $("#message")[0].value;

    Email.send(_email,
        "igoraujo93@gmail.com",
        "Mensagem do Casório de " + _name,
        _message,
        "smtp.elasticemail.com",
        "igoraujo93@gmail.com",
        "ac764659-72e2-4ea5-998a-a6c61cbb950d");

    alert('Muito Obrigado pela sua mensagem!');

    $("#email")[0].value = "";
    $("#name")[0].value = "";
    $("#message")[0].value = "";

}