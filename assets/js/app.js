//Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

//Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}


//Send Email Info
function sendEmail(name, email, message) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "andriy.hedzyk@gmail.com",
      Password: "mcgcsxmrwmokolgf",
        To: "andriy.hedzyk@gmail.com",
        From: "andriy.hedzyk@gmail.com",
        Subject: `${name} send you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then((message) => alert("mail sent successfully"))
}
