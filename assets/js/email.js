function sendEmail() {
    const phoneNumber = "5531973119871";
    let name = $("#name")[0].value;
    let message = $("#message")[0].value;

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}. Mensagem de: ${name}`)

    alert('Muito Obrigado pela sua mensagem!');

    $("#name")[0].value = "";
    $("#message")[0].value = "";

}