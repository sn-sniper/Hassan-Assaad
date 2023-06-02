var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var subject = document.getElementById('Subject').value;
    var message = document.getElementById('Message').value;
Email.send({
    Host: "smtp.elasticemail.com",
    Username: "assaadhassan00021@gmail.com",
    Password: "2EF7B124932CCB6AED54644D42993F740DF6",
    To: 'devilsbreath696@gmail.com',
    From: email,
    Subject: subject,
    Body: message,
}).then(
    message => alert(message)
);
})
