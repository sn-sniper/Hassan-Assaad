function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        to_name: "Hassan Assaad"
    }
    console.log(params);
    const serviceID = "service_6si71i5";
    const templateID = "template_m75g9yr"

    emailjs.send(serviceID, templateID, params).then((response) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(response);
        alert("Email sent Successfully!")
    })
        .catch((e) => console.log(e));
}